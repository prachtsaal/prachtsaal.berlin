#!/bin/bash

# Markdown to PDF Renderer

set -e

# Check if input file argument is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <markdown_file>"
    echo "Example: $0 my-document.md"
    exit 1
fi

input_file="$1"

# Check if pandoc is installed
if ! command -v pandoc &> /dev/null; then
    echo "Error: pandoc is not installed"
    exit 1
fi

# Check if input file exists
if [ ! -f "$input_file" ]; then
    echo "Error: $input_file not found"
    exit 1
fi

# Check if input file has .md extension
if [[ "$input_file" != *.md ]]; then
    echo "Warning: Input file doesn't have .md extension"
fi

echo "Converting $input_file to PDF..."

# Generate output filename (replace .md with .pdf, or add .pdf if no extension)
if [[ "$input_file" == *.md ]]; then
    output_file="${input_file%.md}.pdf"
else
    output_file="${input_file}.pdf"
fi

# Extract title from first # heading, date, and language from front matter
title=$(grep -m 1 '^# ' "$input_file" | sed 's/^# //' || echo "Document")
date=$(grep -m 1 '^date:' "$input_file" | sed 's/^date: *//' | tr -d '"' || echo "")
lang=$(grep -m 1 '^lang:' "$input_file" | sed 's/^lang: *//' | tr -d '"' || echo "")

# Default to English if no language specified
if [ -z "$lang" ]; then
    lang="en"
fi

# Create temporary file with unique name to avoid conflicts
temp_file=$(mktemp "${input_file%.md}_temp_XXXXXX.md")

cat > "$temp_file" << EOF
---
title: "$title"
date: "$date"
lang: "$lang"
---

EOF

# Add content: remove ALL first-level headings (# ), add TOC
sed '
    /^# /d
    s/<!-- table_of_contents -->/\\newpage\n\\tableofcontents\n\\newpage/g
' "$input_file" >> "$temp_file"

# Convert to PDF
pandoc "$temp_file" \
    --pdf-engine=xelatex \
    --from=markdown+smart \
    --to=pdf \
    --output="$output_file" \
    --shift-heading-level-by=-1 \
    --variable=papersize:a4 \
    --variable=geometry:margin=2.5cm \
    --include-in-header=<(cat << HEADER_EOF
\usepackage{fancyhdr}
\usepackage{lastpage}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{$title}
\fancyhead[R]{$date}
\fancyfoot[C]{Page \thepage\ of \pageref{LastPage}}
HEADER_EOF
)

# Clean up
rm -f "$temp_file"

echo "PDF created: $output_file"
