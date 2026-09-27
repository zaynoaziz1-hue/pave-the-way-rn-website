# Pave The Way RN website

Responsive, static marketing site using the business’s supplied photos, logo, and video.

## Preview

From this folder:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory site/dist
```

Open http://127.0.0.1:4173. No package installation or build needed.

## Files

- `site/dist/index.html`: page content and metadata.
- `site/dist/styles.css`: responsive visual design.
- `site/dist/app.js`: before/after comparisons, project selector, navigation, video playback.
- `site/dist/assets/pave-the-way/`: production media.
- `asset-pack/pave-the-way/project-notes.md`: source records, asset map, motion budget.
- Original uploaded files remain at repository root.

## Deploy

The repo is connected to Vercel. `vercel.json` tells Vercel to serve `site/dist/` as-is (no build step), so every push to `main` updates the live site at https://pave-the-way-rn-website.vercel.app and every pull request gets a preview link. All asset paths are relative, so the folder can also be hosted anywhere else unchanged.

Contact actions open the visitor’s phone/email app. Google reviews are verified excerpts with a dated rating snapshot and links to Google; not a live review feed. Typography uses Google Fonts with local system fallbacks.
