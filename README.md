# mazdaf.com — portfolio

Personal portfolio site, rebuilt as plain HTML/CSS/JS (no build step, no framework)
in a clean academic style, migrated from a Google Sites export.

## Structure

```
index.html                          Home page (bio + project list)
projects/
  self-balancing-robot.html
  6-axis-robotic-arm.html
  coin-picking-robot.html
assets/
  css/style.css                     All site styling (light/dark theme via CSS vars)
  js/main.js                        Mobile nav toggle + dark-mode toggle
  img/                               Photos, diagrams, favicon
```

## Running locally

No build step needed — just open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push this folder's contents to the root of a GitHub repository (e.g. `mazda-f.github.io`
   for a user site, or any repo name for a project site).
2. In the repo, go to **Settings → Pages**, set **Source** to the `main` branch, root folder.
3. If using a custom domain, add a `CNAME` file at the repo root containing the domain
   (e.g. `mazdaf.com`) and point your domain's DNS at GitHub Pages.

The `.nojekyll` file tells GitHub Pages to serve the files as-is, without running them
through Jekyll.
