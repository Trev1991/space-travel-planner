# Space Travel Planner (View) — React
Front‑end (View) of a MERN‑style Space Travel Planner that tracks spacecraft details, built with React + Vite. Structured with Separation of Concerns so the storage layer can be swapped for an API later.
## Run
```
npm i
npm run dev
npm test
npm run build && npm run preview
```
## Structure
- components/ — UI building blocks
- context/ — global state (Context + reducer)
- routes/ — pages (Dashboard, Fleet, New, Edit)
- lib/ — persistence wrapper (localStorage)
- utils/ — validation, ids
- __tests__/ — Vitest + RTL
## Features
CRUD spacecraft, search/filter/sort, validated forms, a11y, local persistence, basic tests.
