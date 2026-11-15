# OpenMettle public site

A responsive coming-soon page for OpenMettle. The published page is plain HTML and CSS with no JavaScript, analytics, third-party fonts, or form submissions.

## Local preview

Use Node.js 22.23+, 24.22+, or 26.12+ (within those major versions) and npm. Install the pinned tooling:

```sh
npm ci
```

Start the local Cloudflare preview:

```sh
npx cf dev
```

Open the local URL printed by the command. `npm run dev` runs the same preview. No Cloudflare account is required for local development.

For a preview without Node or Cloudflare tooling, serve the repository root with `python3 -m http.server 8000`, then open http://localhost:8000. Opening `index.html` directly also works.

## Build and validate

```sh
npm run build
npm run check
```

The build writes deployable Cloudflare output to `.cloudflare/output/v0/`. The check runs `cf deploy --dry-run`: it builds and validates without uploading or requiring a login. Generated files and installed dependencies are ignored by Git.

## Deploy to Cloudflare Workers

This project uses Workers Static Assets and the Cloudflare `cf` CLI. `cloudflare.config.ts` sets the Worker name to `openmettle-public-site`. `vite.config.js` selects an assets-only build; no Worker handler is required. The CLI and plugin are currently beta releases and are pinned in `package-lock.json`.

After reviewing the build, sign in and deploy:

```sh
npx cf auth login
npx cf deploy
```

Select the intended Cloudflare account when prompted. The command prints the deployed URL. It enables the Worker's `workers.dev` address; no custom domain or DNS change is configured here. Set a custom domain separately when its target is known.

For Cloudflare Workers Git integration, set the build command to `npm run build` and the deploy command to `npx cf deploy --prebuilt`. Use Node.js 22.23.5 (also recorded in `.node-version`) and the repository root as the project directory. The prebuilt deploy uses the output from the build step.

## Existing static hosting

For Cloudflare Pages Git integration, use `npm run build` as the build command and `.cloudflare/output/v0/workers/default/assets` as the output directory. Set `NODE_VERSION` to `22.23.5` if the build environment does not read `.node-version`. No Pages Functions are needed.

GitHub Pages can still serve the source from the default branch at `/ (root)` with no build command.

## Branding and editing

`assets/mettle.png` is an unchanged copy of `current/openmettle-avatar-transparent.png` from [OpenMettle/.github's brand collection](https://github.com/OpenMettle/.github/tree/main/assets/brand). Original Git blob: `ebc19c9d0274d7c06653a7eb59aa79164605f73f`.

The site follows the graphite, warm ivory and vermilion identity. The text accent is darkened for readable contrast on ivory. The keyhole in Mettle's red tab represents the privacy focus; the copy describes a project in development.

Update the copy in `index.html` and layout in `styles.css`. Source resource paths remain relative for direct-file previews and static hosting at a project path.
