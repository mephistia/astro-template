# Astro Custom Template

This is a custom, opinionated base template for creating a new Astro project.

## ✨ Features

- Prettier rules
- PostCSS (with Autoprefixer)
- Typescript (with '@' path alias)
- React
- ESLint rules (with Unicorn plugin)
- SASS
- Layouts folder refactored to Templates folder for better understanding of it's concept. Thus, the Layouts naming convention may be used for whole-page components.

## 🚀 Astro Project

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Astro docs

Feel free to check [the documentation](https://docs.astro.build).
