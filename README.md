# prachtsaal.berlin
The website of Prachtsaal Studios.
It is developed using Jekyll and tailwindcss. 

Jekyll allows you to edit markdown files, which are then compiled and integrated into a static html, javascript, and css site; Jekyll is what is called a static site generator. 

tailwindcss is a css framework which allows you to define css using user friendly classes in your html.


## Revision

You'd like to maintain the content of the website? Thank you!

### events page

The events page, found in file `events.html`, is coded up and built from other content, like the contents of the `events` and `news` folders. If you want to change the content shown, you'll want to change the content in these two folders.

The events shown as upcoming can be found in the `events` folder. We use Jekyll's support of `posts` for events and news. This means that the file needs to have the date in the filename in the form `yyyy-mm-dd-title.md`, and Jekyll will also automatically parse this information from the file name for you, and offer it as a `date` parameter. The rest of the information that can be customized to provide titles, images, and ticket links is in the "front matter," or the section at the top between the lines with three dashes `---`; these three dashes are required, and tell Jekyll to compile and process the page.

An preconfigured template of a markdown file can be found in `_templates/event-template.md`. 

```
---                           (1)
layout: event                 (2)
title:                        (3)
subtitle:                     (4)
main_image:                   (5)
description:                  (6)
quote:                        (7)
quote_author:                 (8)
quote_author_role:            (9)
images:                       (10)
  - file:                     (11)
    caption:                  (12)
  - file: 
    caption: 
link:                         (13)
link_text:                    (14)
tags: portfolio               (15)
---                           (1)
Add your content here.        (16)
```
- (1) delineates the front matter, is required
- (2) required configuration for the framework (Jekyll)
- (3) shown in list view, and as title of event page
- (4) shown in list view, and as subtitle of event page
- (5) location of the main image, shown in list view, and on event page
- (6) description of event shown in list view, text the describes the page for search engines
- (7) event pages supports a quote as header
- (8) you can attribute the quote to an author
- (9) the quote author can also have a further descriptor
- (10) all images you wish to show at the bottom of the page should be listed here
- (11) the location of the image file. It's important that there are two spaces at the beginning of the line
- (12) the text of the image caption
- (13) a link for ticket sales, or registration, which will show as a button
- (14) the text of the button, that clicks to the link
- (15) tags are used for labeling if an event will be shown in the portfolio, with text `portfolio`. if it should not be shown in the portfolio, don't put a tag
- (16) text content for the vent

### home page

Much of the home page is coded up, and built from other content. However, if you'd like to change the text introducing Prachtsaal on the homepage, you can edit it in index.md. 

```
---                           (1)
layout: home                  (2)
title: Prachtsaal Studio      (3)
subtitle: ...                 (4)
description: ...              (5)
---                           (1)
Prachtsaal (magnificent hall) stands as a nexus of arts,    (6)
```
- (1) delineates the front matter, is required
- (2) required configuration for the framework (Jekyll)
- (3) main title text for home page
- (4) subtitle text for home page
- (5) text the describes the page for search engines
- (6) text content on home page, in markdown

If you want to change anything related to spacing and design, you'll need to change the html and/or the css.

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
  - https://...               (9)
  - https://...               (9)
---                           (1)

This is the text of your personal page. (10)
```
- (1) delineates the front matter, is required
- (2) required configuration for the framework (Jekyll)
- (3) shown in list view, and personal page
- (4) shown in list view, text the describes the page for search engines
- (5) location of image in list view
- (6) location of portrait in personal page
- (7) file location of portfolio image 1 shown in personal page
- (8) website url, including https://
- (9) list your links to your socials
- (10) the text paragraphs you want shown on your personal page

## [WIP] Development

You'd like to develop the design elements and code for the website? Thank you! 


### To serve the website locally
Install jekyll:

```shell
gem install jekyll bundler
```

To run the server, run in this:
```shell
jekyll serve
```

Open: http://localhost:4000/
