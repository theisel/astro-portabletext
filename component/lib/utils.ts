import type { Node, BlockStyle } from "./types";

/** @typedef {import("./types").BlockStyle} BlockStyle */

/**
 * Checks if (node) is of {@link BlockStyle}
 * @param {Node} node
 * @returns {boolean}
 */
export const isBlockStyle = (node: Node): node is BlockStyle =>
  typeof (node as BlockStyle).style === "string";
