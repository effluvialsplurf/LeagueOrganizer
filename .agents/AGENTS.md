# AI Agent Guidelines for LeagueOrganizer

This repository is maintained with the assistance of AI Coding Agents. When operating within this repository, agents must adhere to the following best practices:

1. **Understand the Stack**: Always review `.agents/rules/stack.md` before writing code to ensure compatibility with our specific versions of Go, React, Vite, and Tailwind CSS.
2. **Atomic Changes**: Prefer smaller, verifiable changes. Break down complex tasks, implement incrementally, and verify each step.
3. **Verify Everything**: 
   - Backend: Ensure Go builds successfully and run `go fmt`.
   - Frontend: Verify TypeScript types (`npm run build`) and run ESLint (`npm run lint`) inside the `frontend/app/` directory.
4. **Follow Project Structure**: Respect the existing monorepo structure. Backend code stays in root-level packages like `api/`, `src/`, `db/`, `data/`; frontend code stays strictly in `frontend/app/`.
5. **Context Gathering**: Do not assume the existence of code utilities, packages, or database schemas. Always use search tools (e.g., `grep_search`, `list_dir`, `view_file`) to verify they exist before using them.
6. **Maintain Rules**: Keep this file and `stack.md` up to date when new core technologies are introduced.
