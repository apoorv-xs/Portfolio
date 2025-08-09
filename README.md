# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/a0e62d7e-9df7-4aad-850a-f7255248044a

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/a0e62d7e-9df7-4aad-850a-f7255248044a) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## API: Manage Projects

An Azure Functions API is included at `api/projects` to support dynamic project entries.

- GET `/api/projects` returns `{ projects: ProjectItem[] }`.
- POST `/api/projects` accepts JSON `{ title, description, image }` and requires an `x-api-key` header.

Security notes:

- Set a strong API key as `API_KEY` in your deployment environment (e.g., Azure Static Web Apps secrets).
- The sample implementation stores data in memory. Replace with a persistent data store for production.

Example POST (PowerShell):

```
Invoke-RestMethod -Method Post -Uri "https://<your-app>.azurestaticapps.net/api/projects" -Headers @{"x-api-key"="<your key>"} -ContentType 'application/json' -Body '{"title":"New","description":"Desc","image":"/assets/new.jpg"}'
```

Local dev fallback:

- The frontend uses a hook that fetches `/api/projects` but falls back to static data in `src/data/projects.ts` if the API is unavailable.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/a0e62d7e-9df7-4aad-850a-f7255248044a) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
