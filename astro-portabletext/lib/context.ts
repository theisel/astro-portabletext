import type { TypedObject } from "@portabletext/types";
import type { Component } from "./internal";

export interface Context {
  getDefaultComponent: () => Component;
  getUnknownComponent: () => Component;
}

export const key = Symbol("astro-portabletext");

/**
 * Returns the relevant components for the given node.
 * Intended for internal use only.
 */
export function useContext(node: TypedObject) {
  if (!(key in globalThis)) {
    throw new Error(`PortableText "context" has not been initialised`);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (globalThis as any)[key](node) as Context;
}
