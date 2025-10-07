# SAUCF Research — Project Page

This repository hosts the GitHub Pages site for the "SAUCF" research paper, including methodology, results, simulations, and on‑field testing.

## Quick start

1. Place your final paper at the root as `SAUCF_final.pdf` (already added).
2. Add images/videos into `assets/media/` and update sources in `index.html`.
3. Open `index.html` to edit text in the Overview/Methodology/Results sections.

## Local preview

Just open `index.html` in a browser. For video loading and iframe security, using a simple static server is recommended:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## GitHub Pages deployment

- Create a new GitHub repository and push this folder's contents.
- In GitHub, go to Settings → Pages.
- Set Source to "Deploy from a branch".
- Select branch `main` (or `master`) and folder `/ (root)`.
- Save. Your site will be live at the URL shown by GitHub Pages.

If you prefer the `docs/` folder flow, move all files into `docs/` and select that folder in Pages settings.

## Adding media

- Simulations: add `assets/media/sim-*.mp4` and optional `sim-*-thumb.jpg` posters.
- On‑field tests: add `assets/media/field-*.mp4` and optional thumbnails.
- Results images: add `assets/media/result-*.png`.
- Pipeline diagram: replace `assets/media/pipeline-placeholder.png` with your diagram.

## Customization

- Colors and spacing: edit `assets/css/style.css` CSS variables.
- Dark mode is toggled with the moon/sun button; preference is persisted.
- Update links in the Resources section, including contact email.

## License

You may choose and add a license for your content (e.g., CC BY 4.0).
