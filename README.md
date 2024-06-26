# prachtsaal.berlin
The website of Prachtsaal Studios.
It is developed using Jekyll and tailwindcss. 

Jekyll allows you to edit markdown files, which are then compiled and integrated into a static html, javascript, and css site; Jekyll is what is called a static site generator. 

tailwindcss is a css framework which allows you to define css using user friendly classes in your html.


## Content Revision

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
start_date:                   (17)
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
- (17) if the event has a range of dates, please put the start date here, in the format YYYY-MM-DD, and use the end date for the event date in the file (this allows the javascript that automatically removes past dates from the list of future dates to remove it only when the end date has past)

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
The people page, which is found at `people.html`, is automatically built from text files in the `_members` directory and `_data/communities.yml` file.

#### member pages
Each member has their own markdown (`*.md`) file. The stuff at the top ("front matter") is data that can be accessed by the script that builds the people page, and each member's page. It defines text, and where relevant files are.

```
---                           (1)
layout: member                (2)
full_name: ...                (3)
description: ...              (4)
thumb: ...                    (5)
portrait: ...                 (6)
portfolio_image_locations:
  - /assets/img/members/...   (7)
  - /assets/img/members/...   (7)
website: https://...          (8)
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
- (7) file location of portfolio image shown in personal page
- (8) website url
- (9) list the links to your socials
- (10) the text you want shown on your personal page


#### communities section

The information for the communities section is stored as a data file in `_data/communities.yml`. It is in YAML format. Please see the desired format below.

```
- name: Tape Over                               (1)
  thumb: /assets/img/communities/tapeover.jpeg  (2)
  website: https://tapeover.berlin/             (3)
  visible: true                                 (4)

- name: Xemantic
  thumb: /assets/img/communities/xemantic.png
  website: https://xemantic.com/
  visible: true

...
```
- (1) The name of the organization. The dash indicates a new organization. 
- (2) The logo, if available
- (3) The website to link to.
- (4) If the organization should be shown in the communities section

If you want to change anything related to spacing and design, you'll need to change the html and/or the css.


## [WIP] Development

You'd like to develop the design elements and code for the website? Thank you! 

This website is built using Jekyll and tailwindcss. Jekyll uses Liquid to process templates. Both html files and markdown files can include what's called front matter, which is a section at the top of the page with key value pairs - we use the yaml formating.

To develop for this website, you'll need to install ruby (language Jekyll is written in), Jekyll, and node.js(used to install tailwind), and tailwind.

### To serve the website locally

#### Short story
While you are developing, in one terminal instance, run
```
npm run build-css
```
which watches for any changes, and rebuilds `styles.css`.

In another terminal, run
```
bundle exec jekyll serve
```
which serves the website at http://localhost:4000/
Any changes will be automatically deployed, though you will need to reload your website to see the changes.

#### Long story
The way tailwind works is that it only builds and includes the css that you are using in your website. Therefore, as you build a website, you'll need to rebuild the css with tailwind, to ensure that the css classes defined in tailwind are included. Tailwind will take what's in `/assets/css/source.css` and rebuild it to `/assets/css/styles.css`. This `styles.css` is what is included into the html. If you want to customize your own css and classes, add them to `source.css` to ensure it's included in `styles.css`. The command to build to `styles.css` is documented in `package.json` as an `npm` script `buid-css`. This command will watch for changes and update `styles.css` on the fly.

### Design considerations

The way the website has been developed is it has anticipated that the files that non-technical contributors will want to work with are in markdown, for relative ease of editing. These pages are individual event pages, individual news pages, individual member pages, the about page, and the home page. 

Specifically:
- events are in the `/events/_posts` folder. The means that events are Jekyll posts (which have a special function in Jekyll) with the category of `events`. Event pages use the `_layouts/event.html` layout. More about Jekyll posts: https://jekyllrb.com/docs/posts/
- news items are in the `/news/_posts` folder. This means that news are Jekyll posts, with the category of `news`. The intention is to put any announcements, such as open calls and event reports, in `news`. News pages use the `_layouts/news.html` layout.
- member pages are in the `_members` folder. `members` is a collection in Jekyll, defined in the `_config.yml` file. This means that all the data in the `_members` folder can be accessed via `site.members`. Each member has their own markdown file, which uses the `_layouts/member.html` layout.
- the about page is an example of a generic text only page, which uses the `_layouts/page.html` layout.
- the home page is a custom page, but because there is a little bit of text in it, it is a layout, that can be called by the `index.md` file. That way, the text for the home page, and the titles, can be changed relatively easily.

What's not in markdown are the events and people pages, which compile information in other files, and layouts, which are html templates that markdown files will use, named in the front matter with the key `layout`. These html files are mostly Liquid templating language, html, and tailwind css classes. 

The events page has two sections, an upcoming events section, and an events portfolio. The upcoming events section is filtered by the `events` category (no `news` items will be considered), by date at build time (only future dates are considered), and then at load time, javascript (`/assets/js/future_events.js`) will further remove events that are in the past. The events portfolio section filters all posts (including the `news` category) on the tag `portfolio`. If a future event has been labeled with the tag `portfolio`, it will be shown in the events porfolio section.

All the pages use the layout `default.html` - this layout includes the navigation bar and footer, and required js and css. The html for the navigation bar is at `_includes/navigation.html`, and the html for the footer is at `_includes/footer.html`.

When you create a pull request, there are github actions that will deploy the built site to surge.sh. The url for the website is `prachtsaal-berlin-<branch name>.surge.sh`.


### Installation

You'll want to install ruby and node.js, if you haven't already. If you need to install either of these, here are some helpful references:

- https://jekyllrb.com/docs/installation/ubuntu/
- https://github.com/rubygems/rubygems?tab=readme-ov-file: you can install ruby with [rbenv](https://github.com/rbenv/rbenv)
- https://tailwindcss.com/docs/installation
- https://docs.npmjs.com/downloading-and-installing-node-js-and-npm: to install node and npm, use nvm: https://github.com/nvm-sh/nvm

#### Setting up Jekyll
Once ruby is installed, install jekyll and bundler gems with

```
gem install jekyll bundler
```

If you are setting up your environment, you can set up the ruby environment with

```
bundle install
```
