[**`astro-portabletext` • Type Definitions**](../README.md)

***

# Type Alias: RenderOptions

```ts
type RenderOptions: object;
```

Options for the `render` function accessed via `usePortableText`

## Type declaration

| Name | Type |
| ------ | ------ |
| `type`? | [`RenderHandler`](RenderHandler.md)\<[`TypedObject`](../interfaces/TypedObject.md), `never`\> |
| `block`? | [`RenderHandler`](RenderHandler.md)\<[`Block`](../interfaces/Block.md)\> |
| `list`? | [`RenderHandler`](RenderHandler.md)\<[`List`](List.md)\> |
| `listItem`? | [`RenderHandler`](RenderHandler.md)\<[`ListItem`](ListItem.md)\> |
| `mark`? | [`RenderHandler`](RenderHandler.md)\<[`Mark`](../interfaces/Mark.md)\> |
| `text`? | [`RenderHandler`](RenderHandler.md)\<[`TextNode`](TextNode.md), `never`\> |
| `hardBreak`? | [`RenderHandler`](RenderHandler.md)\<[`TextNode`](TextNode.md), `never`\> |
