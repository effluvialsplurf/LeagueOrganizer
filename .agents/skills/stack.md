---
name: league-organizer-stack
description: LeagueOrganizer technology stack - Go backend with React frontend. Read before writing code.
---

# LeagueOrganizer Technology Stack

## Backend
- **Language**: Go 1.25.3
- **Database**: SQLite (`github.com/mattn/go-sqlite3`)
- **Other**: `golang.org/x/crypto` for cryptography
- **Architecture**: Standard Go layout (directories: `/api`, `/data`, `/db`, `/src`).

### Guidelines for Backend
1. Follow Go standard layout conventions. Keep logic cleanly separated between presentation (`/api`), business logic, and data access (`/db`, `/data`).
2. Use raw SQL with `go-sqlite3` rather than bulky ORMs unless explicitly specified otherwise.
3. Ensure all new Go files use correct package names corresponding to their directory.
4. Check code quality using `go fmt` and `go vet`.

## Frontend
- **Framework**: React 19.2
- **Build Tool**: Vite 8.0 Beta
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS 4.2.1
- **Routing**: React Router DOM 7.13

### Guidelines for Frontend
1. Use functional components and modern React Hooks.
2. Rely strictly on Tailwind utility classes for styling. Do NOT introduce custom CSS unless strictly necessary.
3. Maintain strict typing with TypeScript and avoid `any`.
4. Run scripts from the frontend root: `cd frontend/app`.
5. Verify changes with `npm run lint` and `npm run build` to catch TS/ESLint errors before considering a task complete.
