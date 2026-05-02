This document lists common tasks.

# Add a new member

- Create a new folder under `assets/img/members/` with the name of the
  person. If the name is taken you can add the last name or use a nickname
  instead.
- Take a look at `assets/img/members/abe/` as an example for how to name the
  images. We use WEBP because the file size is smaller and the quality better
  than JPG. Use:
    - NAME-thumb.webp (400x400 portrait)
    - NAME-portrait.webp (larger portrait, longer side 1000 ~ 2000 pixels)
    - NAME-ARTWORK1.webp (artworks, longer side 1000 ~ 2000 pixels)
    - NAME-ARTWORK2.webp
- Duplicate one of the files under `_members/` and rename it matching the folder name you used above.
- Make sure `current` is `true` for current members, make it `false` for past
  members.
- Make sure `thumb`, `portrait` and `portfolio_image_locations` point at the right images.
- Make sure `website` and `socials` start with `https://`. Use `-` if none.
- Paste the full description on the line following `---` at the bottom.


