[**astro-portabletext**](../../README.md) • **Docs**

***

[astro-portabletext](../../README.md) / [types](../README.md) / RenderOptions

# Type Alias: RenderOptions

> **RenderOptions**: `object`

Options for the `render` function accessed via `usePortableText`

## Type declaration

### type?

> `optional` **type**: [`RenderHandler`](RenderHandler.md)\<[`TypedObject`](../interfaces/TypedObject.md), `never`\>

### block?

> `optional` **block**: [`RenderHandler`](RenderHandler.md)\<[`Block`](../interfaces/Block.md)\>

### list?

> `optional` **list**: [`RenderHandler`](RenderHandler.md)\<[`List`](List.md)\>

### listItem?

> `optional` **listItem**: [`RenderHandler`](RenderHandler.md)\<[`ListItem`](ListItem.md)\>

### mark?

> `optional` **mark**: [`RenderHandler`](RenderHandler.md)\<[`Mark`](../interfaces/Mark.md)\>

### text?

> `optional` **text**: [`RenderHandler`](RenderHandler.md)\<[`TextNode`](TextNode.md), `never`\>

### hardBreak?

> `optional` **hardBreak**: [`RenderHandler`](RenderHandler.md)\<[`TextNode`](TextNode.md), `never`\>
