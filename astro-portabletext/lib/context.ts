import type { TypedObject } from "@portabletext/types";
import type { Context } from "./types";

export const key = Symbol("astro-portabletext");

export function usePortableText(node: TypedObject) {
  if (!(key in globalThis)) {
    throw new Error(`PortableText "context" has not been initialised`);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (globalThis as any)[key](node) as Context;
}
