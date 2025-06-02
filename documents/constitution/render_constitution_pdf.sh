#!/bin/bash

# Simple Constitution PDF Renderer

set -e

# Check if pandoc is installed
if ! command -v pandoc &> /dev/null; then
    echo "Error: pandoc is not installed"
    exit 1
fi

# Check if input file exists
if [ ! -f "prachtsaal-constitution.md" ]; then
    echo "Error: prachtsaal-constitution.md not found"
    exit 1
fi

echo "Converting to PDF..."

# Extract title from first # heading and date from front matter
title=$(grep -m 1 '^# ' prachtsaal-constitution.md | sed 's/^# //')
date=$(grep -m 1 '^date:' prachtsaal-constitution.md | sed 's/^date: *//' | tr -d '"')

cat > constitution_temp.md << EOF
---
title: "$title"
date: "$date"
---

EOF

# Add content: remove first # title, convert ## to #, add TOC
sed '
    /^# /{
        1d
    }
    s/^## /# /g
    s/<!-- table_of_contents -->/\\tableofcontents\n\\newpage/g
' prachtsaal-constitution.md >> constitution_temp.md

# Convert to PDF
pandoc constitution_temp.md \
    --pdf-engine=xelatex \
    --from=markdown+smart \
    --to=pdf \
    --output=prachtsaal-constitution.pdf \
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
rm -f constitution_temp.md

echo "PDF created: prachtsaal-constitution.pdf"