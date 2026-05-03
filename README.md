# prachtsaal.berlin, Zola edition

The website of Prachtsaal Studios.

The content of this website is written in Markdown format, 
using a plain text editor.

A tool called [Zola](https://www.getzola.org/documentation/getting-started/overview/) 
converts markdown files into HTML, suitable for web browsers. 
Zola is a "static site generator" (SSG).

[Markdown](https://daringfireball.net/projects/markdown/) 
is easier to write by humans than HTML. One can use any text editor.
The content of the website is located under the `content` folder, 
as markdown files and images in webp format. Each page consists on
a folder with a markdown file and maybe some images.
Here a [guide](https://www.markdownguide.org/basic-syntax/) with the basics.

If a page includes video content, we have an account in 
[Makertube](https://makertube.net/a/prachtsaal/video-channels)
to host them (Berlin based).

The structure of the website is written in HTML and located in the `templates` folder.

The looks of the website are found in `sass/beauty.scss`. We use sass because
it allows for nested CSS rules, which are not yet supported in older devices.

Zola is [configured](https://www.getzola.org/documentation/getting-started/configuration/) in the `config.toml` file.

The `static` folder contains other needed assets that will be served to
visitors, for instance the favicon images, third party JavaScript and CSS
(we use lite-light for zoomable images) and images used in multiple pages.
The `static/processed_images` is automatically generated, and it contains
resized images for faster browsing.

## Running the site locally

To run the server in your own computer you need to 
[install Zola](https://www.getzola.org/documentation/getting-started/installation/).

Once installed, in a terminal window, you can go into the Prachtsaal website
and run `zola serve` (maybe `zola.exe serve` in Windows?). After that, open
[http://localhost:1111](http://localhost:1111) to view the site.
Any changes you make to the markdown files should be instantly reflected
in the web browser. If some change is not reflected, in the terminal window
where zola is running press ctrl+c and run it again.

## Why switching from Jekyll to Zola

In the past we used Jekyll, another static site generator which is integrated
by default in GitHub. Running Jekyll locally is not always as simple as 
running Zola. Jekyll requires a programming language called Ruby and multiple
dependencies. Zola is just one executable, and it runs faster.

Zola enabled a simpler and easier to understand folder structure. 
We greatly reduced the number of folders and were able to place 
images together with markdown files, making them easier to find. 
We used Zola to automatically scale and reduce image 
file sizes, avoiding heavy images getting published. 
We made Zola automatically scan for images to be shown in each page. 
These changes make it easier to maintain by a wider audience, 
removing the need for a content management system.

## How to

### Add a member

- Duplicate the `content/members/kazik-pogoda` folder, giving it a new name (this member is suggested as not every member contains so many details.
- Update the `front matter` in the `index.md` file (the text between `+++` and `+++`)
- Update the content following the `front matter`.
- Add images. The image containing `thumb` in the file name will be shown in the member list in square format. The image containing `portrait` in the name will be shown at the top of the member page. Any other images will be shown at the bottom of the member page as a portfolio.

### Remove a member

If someone is no longer part of the studio, edit `content/members/MEMBERNAME/index.md` and replace `current = true` with `current = false`. This will move the member to the Alumni section.

If a member needs to be completely removed, just delete its folder.

### Add an event

- Duplicate one of the existing events,  for instance `content/events/2025-09-04-Lanterns-Unseen`.
- Update the `front matter` in the `index.md` file (the text between `+++` and `+++`)
- Update the content following the `front matter`.
- Add images. The image containing `thumb` in the file name will be shown in the member list in square format and at the top of the event page. Any other images will be shown at the bottom of the event page.

### Remove an event

The front matter in an event page like `content/events/2025-09-04-Lanterns-Unseen/index.md` contains two flags: `frontpage = true` and `archive = true`. The first one defines
whether the event is shown in the home page. The second one whether the event is shown
in the archive. Set them to true or false as needed.

### Edit other pages

The content of the home page is found in `content/_index.md`.
The impressum can be edited at `content/impressum/index.md`.
The about page at `content/about/index.md`.

### Creating new pages

To add a new page like the `about` or `impressum` pages, duplicate
`content/about` giving it a new name, then edit the title in the new
folder's `index.md` file, edit the markdown below the front matter in the same
file, maybe add some images.

Finally, add the new page to `templates/navigation.html` to make it appear 
in the menu at the top of every page.

## Suggestions

Read the Markdown guide linked above. That's the only thing you need to
learn to do some basic formatting, like headlines and sub headlines,
links, bold text and including images.

Tip: you can paste HTML in the middle of a markdown file. This can be useful
to embed a video or audio player from sites like SoundCloud or Peertube.

## For advanced users

- Study Zola's [documentation](https://www.getzola.org/documentation/getting-started/overview/).
- Study Tera's [documentation](https://keats.github.io/tera/) (the Rust templating engine used in Zola).

### Debugging

It is common to not know what variables are available in a given context when
Zola is processing pages. You can list all the Tera variables available under
`templates/*.html` by pressing the `d` key on the keyboard (only while serving
content locally). The debug info should appear at the bottom of the page and
can be hidden by pressing the key again.

