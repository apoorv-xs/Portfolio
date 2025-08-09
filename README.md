## Personal Portfolio (React + Vite + TypeScript)

A fast, responsive personal portfolio built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui. It includes smooth routing, reusable UI components, and a simple data model for projects.

## Tech stack

- React 18 + TypeScript
- Vite 5 (dev server on http://127.0.0.1:8080)
- Tailwind CSS + shadcn/ui (Radix primitives)
- TanStack Query, React Router

## Quick start

Prerequisites:
- Node.js 18+ (Node 20 LTS recommended)
- npm 9+

Install and run:

```powershell
# from the project root
npm ci ; npm run dev
```

Useful scripts:
- npm run dev – start the dev server
- npm run build – production build to dist/
- npm run build:dev – development-optimized build
- npm run preview – preview the production build locally
- npm run lint – run ESLint
- npm run typecheck – TypeScript project check

## Project structure

- src/pages – top-level routes (Home, Portfolio, About, Skills, 404)
- src/components – UI and section components (Navigation, Hero, Portfolio, Skills, Contact, Footer)
- src/components/ui – shadcn/ui building blocks
- src/data/projects.ts – source of portfolio projects
- src/assets – images used by the site

Routing uses BrowserRouter and is SPA-friendly. Azure Static Web Apps is configured for SPA fallback via staticwebapp.config.json.

## Editing content

Projects
- Update project cards in src/data/projects.ts (title, description, image)
- Add images to src/assets and import them at the top of projects.ts

Branding & Sections
- Edit copy and layout in components within src/components and pages in src/pages

Styling
- Tailwind classes are used throughout. Global styles live in src/index.css and src/App.css

Aliases
- Import using @ from the project root, e.g. import Navigation from "@/components/Navigation"

## Build

```powershell
npm run build ; npm run preview
```
Output is generated to dist/.

## Deployment (Azure Static Web Apps)

This repo includes a GitHub Actions workflow at .github/workflows/azure-static-web-apps.yml.

What it does
- Installs Node 20, runs npm ci and npm run build
- Uploads dist/ to Azure Static Web Apps

To enable
1) Create an Azure Static Web App and link this GitHub repo
2) Add the secret AZURE_STATIC_WEB_APPS_API_TOKEN in the repo (Settings → Secrets and variables → Actions)
3) Push to main; the workflow will build and deploy

Static site config
- SPA fallback and security headers are defined in staticwebapp.config.json

## Troubleshooting

- Port in use: The dev server runs on 8080. Change vite.config.ts if needed
- Node/esbuild issues: Use Node 18/20. esbuild is pinned via package.json overrides
- Windows PowerShell: Separate chained commands with ; (as shown above)

## Acknowledgements

- shadcn/ui, Radix UI, Tailwind CSS, TanStack Query, Vite

## License

Add a license file for your preferred license (e.g., MIT) if you plan to distribute this code.
