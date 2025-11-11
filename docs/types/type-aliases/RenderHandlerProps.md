[**`astro-portabletext` • Type Definitions**](../README.md)

***

# Type Alias: RenderHandlerProps\<T, Children\>

```ts
type RenderHandlerProps<T, Children> = object;
```

Properties for the `RenderHandler` function

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` *extends* [`TypedObject`](../interfaces/TypedObject.md) | [`TypedObject`](../interfaces/TypedObject.md) | Type of Portable Text payload |
| `Children` | `unknown` | Type of children |

## Properties

### Component

```ts
Component: Component<T>;
```

The component that is associated with the Portable Text node.

***

### props

```ts
props: Props<T>;
```

The component props

***

### children?

```ts
optional children: Children;
```

The children related to the Portable Text node.
If the node is a custom [type](../interfaces/PortableTextComponents.md#type) or a [TextNode](TextNode.md), then children will be `undefined`.
