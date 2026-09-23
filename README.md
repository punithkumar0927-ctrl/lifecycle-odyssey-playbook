# Enhanced Vite React TypeScript Template

A modern starter template for building React applications with Vite, TypeScript, Tailwind CSS, and shadcn/ui.

It includes automated CSS variable validation that checks whether every CSS variable referenced in `tailwind.config.cjs` is defined in `src/index.css`. This helps prevent broken Tailwind styles caused by missing CSS variable definitions.

## Features

- ⚡ Fast development setup with Vite and React
- 🔷 Type safety using TypeScript
- 🎨 Tailwind CSS configuration
- 🧩 Pre-configured shadcn/ui components
- ✅ ESLint for JavaScript and TypeScript linting
- 🎯 Stylelint for CSS linting
- 🔍 Custom CSS variable validation
- 🚨 Detects undefined CSS variables used in `tailwind.config.cjs`
- 📁 Clean and reusable starter project structure

## Technologies Used

- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- ESLint
- Stylelint
- Node.js
- npm

## CSS Variable Detection

This template has a custom validation script that checks whether CSS variables used in the Tailwind configuration are available in the main CSS file.

### How It Works

1. Reads `tailwind.config.cjs`
2. Finds CSS variable references such as:

```css
var(--sidebar-background)
```

3. Reads `src/index.css`
4. Finds defined CSS variables such as:

```css
--sidebar-background: 0 0% 100%;
```

5. Compares both files
6. Shows an error when variables are missing

### Example Error

When a CSS variable is used in `tailwind.config.cjs` but not defined in `src/index.css`, the validation can show an error like:

```text
❌ Undefined CSS variables found in tailwind.config.cjs:
   --sidebar-background
   --sidebar-foreground
   --sidebar-primary

Add these variables to src/index.css
```

When all required variables are available:

```text
✅ All CSS variables in tailwind.config.cjs are defined
```

## Project Structure

```text
enhanced-vite-react-template/
│
├── src/
│   ├── components/
│   ├── lib/
│   ├── pages/
│   ├── index.css
│   ├── App.tsx
│   └── main.tsx
│
├── scripts/
│   └── check-css-vars.js
│
├── public/
├── tailwind.config.cjs
├── package.json
├── vite.config.ts
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone [https://github.com/punithkumar0927-ctrl/REPOSITORY_NAME.git](https://github.com/punithkumar0927-ctrl/REPOSITORY_NAME.git)
```

### 2. Open the project folder

```bash
cd REPOSITORY_NAME
```

### 3. Install dependencies

```bash
npm install
```

## Usage

### Start the development server

```bash
npm run dev
```

After starting the server, open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Available Scripts

### Run all lint checks

This command runs JavaScript/TypeScript linting, CSS linting, and CSS variable validation.

```bash
npm run lint
```

### Check CSS variables only

```bash
npm run check:css-vars
```

### Check JavaScript and TypeScript code

```bash
npm run lint:js
```

### Check CSS styles

```bash
npm run lint:css
```

## Add Missing CSS Variables

If the validation script reports an undefined variable, add it to the `:root` section of `src/index.css`.

Example:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
  }
}
```

Then run:

```bash
npm run check:css-vars
```

## Why This Template Is Useful

Tailwind configurations may use CSS variables for themes, colors, sidebar components, buttons, and UI elements. If a referenced variable is missing from the CSS file, the UI can display incorrect colors or styling.

This template catches that issue during linting before deployment, making the development workflow safer and more consistent.

## Future Improvements

- Add dark-mode CSS variable validation
- Add GitHub Actions for automatic linting
- Add unit tests for the validation script
- Add example pages using shadcn/ui components
- Add a theme switcher
- Add reusable dashboard components
- Deploy a live demo using Netlify or Vercel

## Author

**Punith Kumar**

- GitHub: [@punithkumar0927-ctrl](https://github.com/punithkumar0927-ctrl)
- Portfolio: Add your portfolio link here
- LinkedIn: Add your LinkedIn link here

---

⭐ If you find this template useful, consider giving the repository a star.
