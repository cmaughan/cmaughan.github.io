# Repository Guidelines

## Project Structure & Module Organization

This repository is a Hugo site for `chrismaughan.com`. Content lives under `content/`: project entries are in `content/portfolio/`, photographs in `content/photos/`, and standalone pages such as About use section `_index.md` files. Place source images in matching paths under `static/img/`. Site configuration is in `config.toml`; the customized theme, layouts, JavaScript, and CSS are under `themes/hugo-creative-portfolio-theme/`. Python helper tests live in `tests/`, and `.github/workflows/deploy.yml` builds and publishes `master` to GitHub Pages.

## Build, Test, and Development Commands

```bash
python do.py serve
hugo --minify --destination public
python -m unittest discover -s tests -v
```

`python do.py serve` starts a draft-enabled local site at `http://localhost:1313/`. The Hugo command performs a production-style build into the ignored `public/` directory. Run the unit tests for changes to `do.py`.

## Coding Style & Naming Conventions

Use TOML front matter in content files and preserve the fields used by neighboring entries, including `image`, `title`, `date`, and `showonlyimage`. Name Markdown and image files descriptively with lowercase `snake_case`, and keep referenced image paths exact. Match the existing Hugo template indentation and use quoted HTML attributes. Python uses four-space indentation, type hints where helpful, and `snake_case` names.

Use two spaces after every sentence-ending period in prose.

Write portfolio copy in Chris's first-person, conversational voice.  Explain plainly what the project does, why he built it, and what he found interesting, surprising, difficult, or unfinished.  Use concrete technical details, short direct sentences, modest claims, and occasional dry humor or informal asides.  Preserve honest uncertainty and rough edges where appropriate.  Avoid marketing language, inflated claims, extended metaphors, generic enthusiasm, and overly polished agentic prose.  Use American spelling and two spaces after sentence-ending periods.

When a portfolio entry references a presentation, show the presentation's first slide as a clickable image and follow it with a `[Go to presentation...][ref]` text link. Both the image and text must target the same presentation route.

## Testing Guidelines

Every change should produce a clean Hugo build. Check the affected page locally at desktop and mobile widths; for visual or interaction changes, exercise links, navigation, overlays, and image loading. Keep Python tests named `test_*.py` and test methods named `test_*`. No coverage threshold is configured.

## Commit & Pull Request Guidelines

Recent history favors short, imperative commit subjects such as `Add Geek Fast portfolio item`; scoped subjects like `site: show featured portfolio tiles first` are also common. Keep commits focused. Pull requests should explain the visible behavior or content change, list validation commands, and link related issues. Include before-and-after screenshots for layout or styling changes.

## Configuration & Deployment

Do not commit secrets or generated `public/` output. Preserve `CNAME` and verify changes to `baseurl`, analytics, or deployment actions carefully because pushes to `master` publish the live site.
