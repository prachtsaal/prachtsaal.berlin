# prachtsaal.berlin
The website of Prachtsaal Studios

## Revision

You'd like to maintain the content of the website? Thank you!

### people page
The people page is automatically built from text files in the `_people` directory and `_data/communities.yml` file.

Each member has their own markdown (`*.md`) file. The stuff at the top ("front matter") is data that can be accessed by the script that builds the page, which is `./people.html`. It defines text, and where relevant files are.

```
---                           (1)
layout: member                (2)
full_name: ...                (3)
description: ...              (4)
thumb: ...                    (5)
portrait: ...                 (6)
portfolio_image_locations:
- ...                         (7)
- ...                         (7)
website: ...                  (8)
socials:                      
  instagram: your_id          (9)
  facebook: your_id           (9)
---                           (1)

This is the text of your personal page. (10)
```
- (1) delineates the front matter, is required
- (2) required configuration for the framework (Jekyll)
- (3) shown in list view, and personal page
- (4) shown in list view
- (5) location of image in list view
- (6) location of portrait in personal page
- (7) file location of portfolio image 1 shown in personal page
- (8) website url, including https://
- (9) list the platform as key, and your id as the value, without the @. It's important that there are two spaces at the beginning of the line
- (10) the text paragraphs you want shown on your personal page

## Development

Install jekyll:

```shell
gem install jekyll bundler
```

To run the server, run in this:
```shell
jekyll serve
```

Open: http://localhost:4000/
