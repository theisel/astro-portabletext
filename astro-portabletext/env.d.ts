/// <reference types="astro/client" />

/**
 * Explicitly declare `.astro` files as modules for pure TypeScript (`tsc`).
 *
 * This library re-exports Astro components through `.ts` files (e.g., `lib/index.ts`)
 * — as TypeScript does not natively understand `.astro` files —
 * this declaration prevents pure TypeScript from throwing
 * "Cannot find module" errors during TS checking.
 */
declare module "*.astro" {
  type Props = Record<string, unknown>;
  const Component: (props: Props) => unknown;

  export default Component;
  export type { Props };
}
