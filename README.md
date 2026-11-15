# OpenMettle public site

A small, responsive coming-soon page for OpenMettle. Plain HTML and CSS with no build step, JavaScript, analytics, third-party fonts, or form submissions.

## Preview

Serve the repository root using any static web server, for example:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. The page also works by opening `index.html` directly.

## Publish

The publish directory is the repository root. No build command is required. For GitHub Pages, select **Deploy from a branch**, the default branch, and **/ (root)** in repository **Settings → Pages**. For Cloudflare Pages, use the default branch with no build command and `.` as the output directory.

All resource paths are relative, so the page works at a domain root or a GitHub Pages project path. No domain or launch date is assumed.

## Branding

`assets/mettle.png` is an unchanged copy of `current/openmettle-avatar-transparent.png` from [OpenMettle/.github's brand collection](https://github.com/OpenMettle/.github/tree/main/assets/brand). Original Git blob: `ebc19c9d0274d7c06653a7eb59aa79164605f73f`.

The site follows the graphite, warm ivory and vermilion identity. The text accent is darkened to maintain readable contrast on ivory. The keyhole in Mettle's red tab represents the privacy focus; the page does not imply that a supported product has already launched.

Update the copy in `index.html` and layout in `styles.css`.
