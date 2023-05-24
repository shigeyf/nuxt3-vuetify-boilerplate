# A minimal starter boilerplate project for Nuxt 3 application with Vuetify 3

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Features

- [x] ⚡ Integrate with Vuetify 3
- [x] 😀 Added fonts support: Material Design Icon SVG & FontAwesome SVG
- [x] ✨ Code Formtatting and Linting tools: Prettier, ESLint, StyleLint & lint-staged
- [x] ⭐ Commit Log Formatting & Linting tools: Commitizen, git-cz & commitlint
- [x] 🐕 Husky for Git hooks (commit-msg, pre-commit, prepare-commit-msg)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Notes

### Integrate with Vuetify 3

The following NPM modules are added to this plain Nuxt3 app template.

- vuetify
- sass
- vite-plugin-vuetify
- @mdi/js
- @fortawesome/fontawesome-svg-core
- @fortawesome/vue-fontawesome
- @fortawesome/free-solid-svg-icons
- @fortawesome/free-regular-svg-icons
- @fortawesome/free-brands-svg-icons

```bash
npm install --save-dev vuetify sass vite-plugin-vuetify @mdi/js
npm install --save-dev @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome
npm install --save-dev @fortawesome/free-solid-svg-icons
npm install --save-dev @fortawesome/free-regular-svg-icons
npm install --save-dev @fortawesome/free-brands-svg-icons
```

`nuxt.config.ts` is updated to setup Veutify 3.

Also, the following files are added:

- src/plugins/veutify.ts
- src/utils/themes.ts
- src/assets/scss/main.scss
