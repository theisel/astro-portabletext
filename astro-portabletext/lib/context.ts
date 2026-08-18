import type { TypedObject } from "@portabletext/types";
import type { Context } from "./types";

export const key = Symbol("astro-portabletext");

/**
 * Returns rendering utilities for a node within a Portable Text tree.
 * Must be called from a component passed to the PortableText `components` prop.
 *
 * @param node - The Portable Text node passed into the component.
 * @returns Component resolution and render utilities.
 */
export function usePortableText(node: TypedObject): Context {
  if (!(key in globalThis)) {
    throw new Error(`PortableText "context" has not been initialised`);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (globalThis as any)[key](node) as Context;
}
