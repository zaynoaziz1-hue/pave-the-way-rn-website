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

Deploy the contents of `site/dist/` when ready. All local asset paths are relative, including for a GitHub Pages project path. No deployment or GitHub upload has been performed.

Call/email links open the visitor’s phone/email app. The quote request form in the contact section posts to [FormSubmit](https://formsubmit.co) (no account, free), which forwards each request to pavethewayrn@gmail.com. The very first submission triggers a one-time activation email to that inbox; click the link in it and later requests arrive as normal emails. If sending fails, the form offers a prefilled email and the phone number instead. To use a different inbox or service, change `action` and `data-endpoint` on `#quote-form` in `index.html`. Google reviews are verified excerpts with a dated rating snapshot and links to Google; not a live review feed. Typography uses Google Fonts with local system fallbacks.
