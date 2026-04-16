---
name: league-organizer-guidelines
description: General guidelines for working on the LeagueOrganizer project
---

# LeagueOrganizer Agent Guidelines

1. **Understand the Stack**: Load and follow the `league-organizer-stack` skill before writing code.
2. **Atomic Changes**: Prefer smaller, verifiable changes. Break down complex tasks, implement incrementally, and verify each step.
3. **Verify Everything**: 
   - Backend: Ensure Go builds successfully and run `go fmt`.
   - Frontend: Verify TypeScript types (`npm run build`) and run ESLint (`npm run lint`) inside the `frontend/app/` directory.
4. **Follow Project Structure**: Respect the existing monorepo structure. Backend code stays in root-level packages like `api/`, `src/`, `db/`, `data/`; frontend code stays strictly in `frontend/app/`.
5. **Context Gathering**: Do not assume the existence of code utilities, packages, or database schemas. Always use search tools (e.g., `grep`, `glob`, `view`) to verify they exist before using them.
