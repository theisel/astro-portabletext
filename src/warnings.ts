/**
 * Credit: [react-portabletext]{@link https://github.com/portabletext/react-portabletext}
 */

const getTemplate = (type: string, prop: string): string =>
  `Absent ${type}, add component to [components.${prop}]`;

export const unknownTypeWarning = (typeName: string): string =>
  getTemplate(`block type "${typeName}"`, "type");

export const unknownMarkWarning = (markType: string): string =>
  getTemplate(`mark type "${markType}"`, "mark");

export const unknownBlockStyleWarning = (blockStyle: string): string =>
  getTemplate(`block style "${blockStyle}"`, "block");

export const unknownListStyleWarning = (listStyle: string): string =>
  getTemplate(`list style "${listStyle}"`, "list");

export const unknownListItemStyleWarning = (listStyle: string): string =>
  getTemplate(`list item style "${listStyle}"`, "listItem");

export function printWarning(message: string): void {
  console.warn(message);
}
