# Rafe Symonds — Personal Website

Personal portfolio site for [Rafe Symonds](https://github.com/RafeSymonds).

**Live site:** https://rafesymonds.github.io/personal-website/

## About

Clean, minimal dark-theme portfolio. Built with plain HTML, CSS, and vanilla JS — no frameworks, no build step. GitHub Pages compatible.

## Deployment

Deploys automatically to GitHub Pages via GitHub Actions on every push to `main`.

To enable GitHub Pages:
1. Go to repo Settings → Pages
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the workflow handles the rest

## Local development

```bash
# Just open the file directly, or use any static server:
npx serve .
# or
python3 -m http.server 8080
```

## Stack

- HTML5, CSS3, Vanilla JS
- [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- GitHub Actions for CI/CD
- GitHub Pages for hosting
