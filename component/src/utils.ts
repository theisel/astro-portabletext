import type { TypedObject, BlockStyle } from "./types";

export { toPlainText } from "@portabletext/toolkit";
export { mergeComponents } from "./internal";

/**
 * Checks if (node) is of {@link BlockStyle}
 */
export const isBlockStyle = (node: TypedObject): node is BlockStyle =>
  typeof (node as BlockStyle).style === "string";
