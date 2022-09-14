# Vitalizando - SvelteKit + Tailwind data Fetching

SvelteKit just announced their new version and its pretty awesome.
I've created this repo to reinforcing my understanding of new way to use svelteKit.
Please be nice Im sorry if there is any mistake in this repo. We all learn from our mistakes:)

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Install Tailwind-css in the project

> I've follow this steps from Tailwindcss and helped get this together'!
> [adapter](https://tailwindcss.com/docs/guides/sveltekit).

```bash
# Run this on your Terminal
npm init svelte@next my-app

cd my-app

# On the same Directory run
npm install -D tailwindcss postcss autoprefixer svelte-preprocess
npx tailwindcss init tailwind.config.cjs -p

# On thesvelte.config.js
import preprocess from "svelte-preprocess";

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

# On tailwind.Config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
};

# On app.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# Re-Run the dev server and it should work
```
