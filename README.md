# DiigiiHost Assignment

A responsive React landing page built with Vite and Tailwind CSS.

## Requirements

- Node.js 20 or later
- npm (included with Node.js)

## Install and run

From the project folder, install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in the terminal (normally `http://localhost:5173`).

> On Windows, if PowerShell blocks `npm`, use `npm.cmd` instead:
>
> ```powershell
> npm.cmd install
> npm.cmd run dev
> ```

## Available commands

```bash
# Start the development server
npm run dev

# Create an optimized production build in /dist
npm run build

# Preview the production build locally
npm run preview

# Run ESLint
npm run lint
```

## Tailwind CSS

Tailwind CSS v4 is already installed and connected through the Vite plugin.

```bash
npm install tailwindcss @tailwindcss/vite
```

The configuration is in `vite.config.js`, and Tailwind is imported in `src/index.css`:

```css
@import 'tailwindcss';
```

## Project structure

```text
src/
  assets/       Images and visual assets
  components/   Reusable page sections
  data/         Text and content data
  App.jsx       Page composition
  index.css     Global styles, fonts, and Tailwind import
```

## Notes

- The page is component-based: each major section lives in `src/components` and is assembled in `src/App.jsx`.
- Layouts use responsive Tailwind utilities, with the manifesto text switching to a stacked layout on narrower screens to prevent overlap with images.
- Scroll-triggered animations use the browser `IntersectionObserver` API, avoiding an extra animation dependency.
- The bundled Altone font files are trial files and may render watermark glyphs for certain characters. Where needed, a system-font fallback is used for those characters.
- Alton and Kaushan Script are loaded from Google Fonts so their typography matches the intended design more closely.
