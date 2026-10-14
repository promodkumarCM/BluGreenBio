# BluGreen BioVentures frontend

A React 19.3 + TypeScript single-page app with a responsive company site, validated enquiry and authentication forms, shared authentication context, and a protected dashboard. Each landing-page section has its own component in `src/components/sections/`, shared content is defined in `src/components/sections/data.ts`, and reusable heading/card components live in `src/components/sections/shared/`.

## Requirements

- Node.js 22.12 or newer
- pnpm 10 or newer

## Run locally

```sh
pnpm install
cp .env.example .env
# Set VITE_API_URL, VITE_API_KEY, and PORT in .env
pnpm run start
```

Vite serves the app on `http://localhost:${PORT}` (default `5173`). Use `pnpm run build` to type-check and create a production build, or `pnpm run preview` to preview it.

## Environment

| Variable | Purpose | Example |
| --- | --- | --- |
| `VITE_API_URL` | Base URL for the backend API | `http://localhost:3000/api` |
| `VITE_API_KEY` | Optional public API key sent as `X-API-Key` | `public-client-key` |
| `PORT` | Vite development and preview port | `5173` |

If `VITE_API_URL` is not set, API requests use the same-origin `/api` path so the app can start without a `.env` file.

Vite embeds `VITE_*` variables in browser code. Never put a private or privileged API key in `VITE_API_KEY`; enforce secret API credentials on a backend.

## Backend contract

The forms call `POST /auth/login` and `POST /auth/register` relative to `VITE_API_URL`, with JSON request bodies. Login sends `{ "email", "password" }`; registration also sends `"name"`. Both endpoints should return `{ "token": "...", "user": { "id": "...", "name": "...", "email": "..." } }`. Non-2xx responses may include a JSON `"message"` or `"error"` for the form to display. The browser must be allowed by the API's CORS policy.

The auth context persists the returned session in browser local storage. Client-side route guards are for navigation only; the API must independently authenticate and authorize protected data requests.

The public company-site enquiry form validates its fields in the browser and does not submit or store the enquiry. Connect it to a backend or form service before using it to receive submissions.
