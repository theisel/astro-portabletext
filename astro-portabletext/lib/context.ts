import type { TypedObject } from "@portabletext/types";
import type { Component } from "./internal";
import type { RenderOptions } from "./types";

/**
 * Context object providing access to rendering utilities within a Portable Text tree.
 *
 * @property getDefaultComponent - Function to retrieve the default astro-portabletext component associated with a node, such as `Block`, `List`, etc.
 * @property getUnknownComponent - Function to retrieve the unknown component associated with a node, such as `unknownBlock`, `unknownList`, etc.
 * @property render - Function to customize the rendering of specific node types.
 */
export interface Context {
  getDefaultComponent: () => Component;
  getUnknownComponent: () => Component;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (options: RenderOptions) => any;
}

export const key = Symbol("astro-portabletext");

export function usePortableText(node: TypedObject) {
  if (!(key in globalThis)) {
    throw new Error(`PortableText "context" has not been initialised`);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (globalThis as any)[key](node) as Context;
}
