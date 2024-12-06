[**`astro-portabletext` • Type Definitions**](../README.md)

***

# Type Alias: RenderHandlerProps\<T, Children\>

```ts
type RenderHandlerProps<T, Children>: object;
```

Properties for the `RenderHandler` function

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` *extends* [`TypedObject`](../interfaces/TypedObject.md) | [`TypedObject`](../interfaces/TypedObject.md) | Type of Portable Text payload |
| `Children` | `unknown` | Type of children |

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `Component` | [`Component`](Component.md)\<`T`\> | The component that is associated with the Portable Text node. |
| `props` | [`Props`](../interfaces/Props.md)\<`T`\> | The component props |
| `children`? | `Children` | The children related to the Portable Text node. If the node is a custom [type](../interfaces/PortableTextComponents.md#type) or a [TextNode](TextNode.md), then children will be `undefined`. |
