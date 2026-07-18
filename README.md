# Audrey Hsiao — Portfolio

Personal portfolio site showcasing projects and experience in Computer Science, AI/ML, and full-stack development.

**Live**: [audreyhsiao.github.io](https://audreyhsiao.github.io)

## Stack

- **Markup/JS**: Static HTML5, vanilla JavaScript (no framework — modal system, mobile nav, and form handling are hand-rolled)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), compiled ahead of time via the Tailwind CLI. Layout and spacing are plain utility classes in the markup; the handful of bespoke visual elements (glassmorphism modals, the avatar mask, project-card shadows) are defined once as `@apply`-based component classes in `src/css/tailwind-input.css`
- **Third-party (CDN)**: [Typed.js](https://mattboldt.com/demos/typed-js/) for the hero typewriter effect, Font Awesome for icons, Animate.css for entrance animations
- **Contact form**: [Formspree](https://formspree.io/)
- **Resume download**: password-gated via a Vercel serverless function (`api/get-resume.js`)

## Project structure

```
.
├── index.html                  # Main page
├── photography.html            # Photography page (unlinked from nav, still deployed)
├── HOW_TO_ADD_PROJECT_IMAGES.md
├── tailwind.config.js
├── package.json
├── api/
│   └── get-resume.js           # Vercel function: password check + PDF stream
├── src/
│   ├── css/
│   │   ├── tailwind-input.css  # Source: @tailwind directives + component layer
│   │   └── style.css           # Compiled output, committed (no build step on GitHub Pages)
│   ├── images/
│   └── logos/
└── private/                    # Gitignored except *.md — holds the resume PDF
```

## Local development

```bash
npm install
npm run build:css     # one-off compile
npm run watch:css     # rebuild on change while editing tailwind-input.css
```

Then serve the directory root with any static server, e.g. `python3 -m http.server 8000`, and open `index.html`. There's no bundler or dev server for the HTML/JS — it's plain static files.

Editing styles: change utility classes directly in the HTML for layout/spacing, or edit the `@layer components` block in `src/css/tailwind-input.css` for the shared visual components, then rebuild.

Adding project images: see [HOW_TO_ADD_PROJECT_IMAGES.md](HOW_TO_ADD_PROJECT_IMAGES.md).

## Deployment

- **GitHub Pages** serves `main` directly as static files — the compiled `src/css/style.css` is committed for exactly this reason, since Pages has no build step.
- **Vercel** hosts `api/get-resume.js`, the one piece of server logic (password-gated resume download). It needs a `RESUME_PASSWORD` environment variable set in the Vercel project; see `private/DEPLOYMENT.md`.

## Security notes

The resume endpoint (`api/get-resume.js`) rate-limits failed attempts per IP (5/hour) and compares the submitted password using a constant-time comparison to reduce timing side-channels. The resume PDF itself lives in `private/`, which is gitignored, so it's never present in the static bundle GitHub Pages serves.

## Color reference

| Element | Hex |
|---|---|
| Background | `#0b0b0b` |
| Header | `#ffffff` |
| Accent (pink) | `#ff2e63` |
| Accent hover | `#e0254f` |
| Modal foreground | `#1a1a1a` |

## Contact

**Audrey Hsiao**
- Website: [audreyhsiao.github.io](https://audreyhsiao.github.io)
- LinkedIn: [linkedin.com/in/audrey-hsiao](https://linkedin.com/in/audrey-hsiao)
- GitHub: [@audreyhsiao](https://github.com/audreyhsiao)
