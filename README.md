# DartOS Landing

Production-ready foundation for the DartOS landing page application.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** CSS (global styles in `src/styles/`)
- **Testing:** [Vitest](https://vitest.dev/)
- **Linting:** ESLint + Prettier
- **Git hooks:** Husky + lint-staged

## Prerequisites

- Node.js 20+
- npm 10+

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd DartOS_Landing
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   ```bash
   cp .env.example .env.local
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Script              | Description                              |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Start development server                 |
| `npm run build`     | Create production build                  |
| `npm run start`     | Start production server                  |
| `npm run lint`      | Run ESLint                               |
| `npm run lint:fix`  | Fix ESLint issues                        |
| `npm run format`    | Format code with Prettier                |
| `npm run typecheck` | Run TypeScript type checking             |
| `npm run test`      | Run tests                                |
| `npm run validate`  | Run typecheck, lint, format check, tests |

## Project Structure

See [docs/architecture.md](./docs/architecture.md) for a detailed overview of the folder structure and architectural conventions.

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting changes.

## License

This project is licensed under the MIT License — see [LICENSE](./LICENSE) for details.
