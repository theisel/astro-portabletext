# Laboratory

This directory serves as the testing sandbox and fixture generator for the core `astro-portabletext` package.

## How testing works

To ensure maximum fidelity with real-world usage, this testing sandbox follows a strict two-step integration process:

1. **Fixture Generation**: Running `pnpm build:fixture` uses the Astro compiler to build the `fixtures/src/pages/` into static HTML.
2. **Validation**: Vitest (`tests/integration/*.test.ts`) parses the resulting static HTML using `cheerio` to assert that the components rendered exactly as expected.
3. **Unit Tests**: Pure utility functions are tested directly in `tests/unit/*.test.ts`.

## Commands

From this directory, you can run:

- `pnpm test` - Runs the full test suite (builds fixtures and runs vitest).
- `pnpm test:component` - Builds fixtures and runs only the component integration tests.
- `pnpm test:unit` - Runs only the utility unit tests.
- `pnpm test:watch` - Runs Vitest in watch mode (useful for active development).
