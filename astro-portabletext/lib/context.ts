import type { TypedObject } from "@portabletext/types";
import type { Context } from "./types";

export const key = Symbol("astro-portabletext");

/**
 * This function returns rendering utility functions within a Portable Text tree. It should
 * only be used within an Astro component that has been passed into the PortableText `components` prop.
 * It follows a naming convention similar to React hooks, though it is not a hook as such.
 *
 * @param node - The Portable Text node that was passed into the Astro component
 * @returns Rendering utility functions
 */
export function usePortableText(node: TypedObject) {
  if (!(key in globalThis)) {
    throw new Error(`PortableText "context" has not been initialised`);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (globalThis as any)[key](node) as Context;
}
