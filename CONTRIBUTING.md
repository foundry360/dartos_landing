# Contributing to DartOS Landing

Thank you for your interest in contributing. This document outlines the workflow and standards for this project.

## Development Setup

1. Fork and clone the repository.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and adjust values as needed.
4. Run `npm run dev` to start the development server.

## Branch Naming

Use descriptive branch names:

- `feature/<short-description>` — new features
- `fix/<short-description>` — bug fixes
- `chore/<short-description>` — tooling, deps, config
- `docs/<short-description>` — documentation only

## Code Standards

- **TypeScript:** Strict mode is enabled. Avoid `any` unless absolutely necessary.
- **Imports:** Use the `@/` path alias for internal modules.
- **Formatting:** Prettier is enforced. Run `npm run format` before committing.
- **Linting:** ESLint must pass with zero warnings (`npm run lint`).
- **Tests:** Add tests for new utility functions and business logic.

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <short description>

[optional body]
```

Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

## Pull Request Process

1. Create a feature branch from `main`.
2. Make your changes with clear, focused commits.
3. Run `npm run validate` and ensure all checks pass.
4. Open a pull request with:
   - A clear title and description
   - Screenshots for UI changes (if applicable)
   - A test plan describing how changes were verified

## Architecture Guidelines

- Place **shared UI** in `src/components/`.
- Place **domain-specific code** in `src/features/<feature>/`.
- Keep **API route handlers** in `src/app/api/`.
- Keep **client-side API logic** in `src/services/`.
- Add **global providers** in `src/providers/`.

See [docs/architecture.md](./docs/architecture.md) for the full structure guide.

## Questions

Open an issue for questions or architectural discussions before starting large changes.
