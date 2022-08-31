import type { Node, BlockStyle } from "./types";

export { toPlainText } from "@portabletext/toolkit";
export { mergeComponents } from "./internal";

/**
 * Checks if (node) is of {@link BlockStyle}
 * @param {Node} node
 * @returns {boolean}
 */
export const isBlockStyle = (node: Node): node is BlockStyle =>
  typeof (node as BlockStyle).style === "string";
