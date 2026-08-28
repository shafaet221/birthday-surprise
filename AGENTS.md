# Birthday Website Agent Guide

## Project Shape

- This is a static HTML/CSS/JavaScript site with no package manager, build tool, or automated test suite.
- [index.html](index.html) owns the page markup and loads [css/style.css](css/style.css), [css/cake-3d.css](css/cake-3d.css), [js/script.js](js/script.js), and [js/enhancements.js](js/enhancements.js).
- [js/script.js](js/script.js) owns the main interactions and the `CONFIG` object. Keep names, dates, photos, messages, and optional media settings there rather than scattering content through the page.
- [js/enhancements.js](js/enhancements.js) owns decorative particles, sparkle effects, hover glows, mouse tracking, and enhancement-only interactions.
- CSS-only cake structure and animation belong in [css/cake-3d.css](css/cake-3d.css); shared layout, theme, responsive rules, and motion belong in [css/style.css](css/style.css).

## Local Workflow

Run the site from the repository root with:

```powershell
py -m http.server 8000
```

Then open `http://localhost:8000/`. There is no build step. Validate changes manually in a browser at desktop and narrow mobile widths, checking the splash screen, scrolling reveals, carousel, flip cards, envelope, cake candles, lightbox, and the browser console.

## Editing Rules

- Preserve the classic global-script load order: `script.js` runs before `enhancements.js`.
- Check for existing global function names before adding one. In particular, both scripts currently define `createSparkles`; do not introduce another collision or assume the later definition has the earlier function's signature.
- Avoid adding a second `IntersectionObserver` for the same `.scroll-reveal` elements unless the behavior is deliberately coordinated with the existing observers.
- Keep `CONFIG.photos` non-empty unless the carousel indexing logic is updated at the same time.
- Optional counter, voice, and secret-message features are enabled by setting their `CONFIG` values; keep empty values working as the hidden/default state.
- Preserve reduced-motion behavior in both CSS and JavaScript when adding animation or generated decorative elements.
- Keep interactive elements keyboard-accessible, including the cake candle controls and flip cards.
- Prefer existing project patterns and small focused edits. Do not add dependencies or a build system for routine page changes.

## Documentation

- [ENHANCEMENTS.md](ENHANCEMENTS.md) is a historical summary, not an executable specification.
- [Birthday page skill](.github/skills/create-beautiful-birthday-page/SKILL.md) contains the reusable workflow for romantic animated birthday pages; link to it rather than duplicating it here.