const getTemplate = (prop: string, type: string): string =>
  `PortableText [components.${prop}] is missing "${type}"`;

export const unknownTypeWarning = (type: string): string =>
  getTemplate("type", type);

export const unknownMarkWarning = (markType: string): string =>
  getTemplate("mark", markType);

export const unknownBlockWarning = (style: string): string =>
  getTemplate("block", style);

export const unknownListWarning = (listItem: string): string =>
  getTemplate("list", listItem);

export const unknownListItemWarning = (listStyle: string): string =>
  getTemplate("listItem", listStyle);

export function printWarning(message: string): void {
  console.warn(message);
}
