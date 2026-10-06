# mazda-f.github.io

Personal academic portfolio of Mazda Farrahi, built with the
[al-folio](https://github.com/alshedivat/al-folio) Jekyll template (v1.x).

## Where things live

| What                       | File                                    |
| -------------------------- | --------------------------------------- |
| Front page (bio, timeline, education, projects, skills) | `_pages/about.md` |
| Project pages              | `_projects/*.md`                        |
| Name, site URL, feature flags | `_config.yml`                        |
| Social / contact icons     | `_data/socials.yml`                     |
| Images                     | `assets/img/`                           |
| ELEC 391 report PDF        | `assets/pdf/`                           |

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to the `gh-pages` branch. GitHub Pages must be set to serve from
**Settings → Pages → Deploy from a branch → `gh-pages` / `(root)`**.

## Running locally

Requires Ruby 3.x (`brew install ruby`):

```bash
bundle install
bundle exec jekyll serve      # http://localhost:4000
```

`_config.local.yml` turns off ImageMagick (not needed locally) and is ignored by git:

```bash
bundle exec jekyll serve --config _config.yml,_config.local.yml --livereload
```

## License

Template code is MIT licensed by the al-folio authors (see `LICENSE`).
