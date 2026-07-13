# Architecture

This document describes the folder structure and architectural conventions for the DartOS Landing application.

## Overview

DartOS Landing is a [Next.js 15](https://nextjs.org/) application using the **App Router** with **TypeScript strict mode**. The codebase is organized for scalability: shared primitives live at the top level, while domain-specific logic is colocated in feature modules.

## Directory Structure

```
DartOS_Landing/
├── docs/                    # Project documentation
├── public/                  # Static files served at the root URL
├── src/
│   ├── app/                 # Next.js App Router (pages, layouts, API routes)
│   │   └── api/             # Server-side API route handlers
│   ├── api/                 # API utilities and shared server/client API code
│   ├── assets/              # Bundled static assets (images, fonts)
│   ├── components/          # Shared, reusable UI components
│   ├── config/              # Application configuration and env handling
│   ├── constants/           # App-wide constant values
│   ├── contexts/            # React context definitions
│   ├── features/            # Feature modules (domain-driven organization)
│   ├── hooks/               # Shared custom React hooks
│   ├── lib/                 # Third-party integrations and core libraries
│   ├── middleware.ts        # Next.js edge middleware
│   ├── providers/           # Root and global React providers
│   ├── services/            # API clients and external service wrappers
│   ├── store/               # Global state management
│   ├── styles/              # Global stylesheets
│   ├── types/               # Shared TypeScript types
│   └── utils/               # Pure utility functions
└── tests/                   # Test files (Vitest)
```

## Layer Responsibilities

### `src/app/`

Next.js App Router entry point. Contains:

- **Layouts** — shared page shells (`layout.tsx`)
- **Pages** — route segments (`page.tsx`)
- **API routes** — server endpoints under `app/api/`

Route handlers should remain thin; delegate business logic to `services/` or `features/`.

### `src/components/`

Shared, presentation-focused UI components used across multiple features. Components here should be generic and free of domain-specific business logic.

### `src/features/`

Feature modules organized by domain. Each feature is self-contained:

```
features/
  hero/
    components/
    hooks/
    types.ts
    index.ts
```

Prefer colocating feature-specific code here rather than in top-level folders.

### `src/hooks/`

Shared React hooks that are not tied to a single feature. Feature-specific hooks belong inside the feature folder.

### `src/lib/`

Core library code and third-party client setup (e.g., analytics, auth clients). Re-exports commonly used modules.

### `src/services/`

Data access and external API integration. HTTP clients, fetch wrappers, and service-specific logic live here.

### `src/types/`

Shared TypeScript interfaces, types, and enums used across the application.

### `src/utils/`

Pure, side-effect-free utility functions. These are ideal candidates for unit tests.

### `src/constants/`

Immutable application constants (route paths, default values, feature flags).

### `src/contexts/` and `src/providers/`

- **contexts/** — React context object definitions
- **providers/** — Provider components that wrap the app; composed in `AppProviders`

### `src/store/`

Global client-side state. Add Zustand, Redux, or Jotai slices here when needed.

### `src/config/`

Configuration modules, including typed environment variable access (`config/env.ts`).

### `src/middleware.ts`

Next.js edge middleware for request interception (auth, redirects, headers).

### `src/styles/`

Global CSS and design tokens. Component-scoped styles can use CSS Modules alongside components.

### `tests/`

Vitest test files. Mirror the `src/` structure where practical:

```
tests/
  utils/
    cn.test.ts
```

## Path Aliases

Internal imports use the `@/` alias, mapped to `src/`:

```typescript
import { env } from "@/config/env";
import { cn } from "@/utils";
```

## Environment Variables

- **`.env.example`** — template committed to version control
- **`.env.local`** — local overrides (gitignored)
- Access variables through `src/config/env.ts` for type safety and validation

Only variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## Data Flow

```
Page (app/) → Feature components → Hooks → Services → API
                     ↓
              Shared components, utils, types
```

Server Components fetch data directly in `app/` routes or via `services/`. Client Components use hooks and context for interactivity.

## Conventions

1. **Colocate by feature** when code is used in one domain only.
2. **Promote to shared** when code is reused in two or more features.
3. **Keep route handlers thin** — one responsibility per API route.
4. **Validate environment variables** at startup via `config/env.ts`.
5. **Write tests** for utilities and non-trivial business logic.

## Tooling

| Tool        | Purpose                        |
| ----------- | ------------------------------ |
| TypeScript  | Static typing (strict mode)    |
| ESLint      | Code quality and Next.js rules |
| Prettier    | Code formatting                |
| Husky       | Git pre-commit hooks           |
| lint-staged | Lint/format only staged files  |
| Vitest      | Unit and integration tests     |

Run `npm run validate` before opening a pull request to ensure all checks pass.
