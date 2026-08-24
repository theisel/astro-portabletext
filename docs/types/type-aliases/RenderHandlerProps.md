[**`astro-portabletext` v0.13.0 • Type Definitions**](../README.md)

---

# Type Alias: RenderHandlerProps\<T, Children\>

```ts
type RenderHandlerProps<T, Children> = object;
```

Properties for the `RenderHandler` function.

## Type Parameters

| Type Parameter                                              | Default type                                  | Description                  |
| ----------------------------------------------------------- | --------------------------------------------- | ---------------------------- |
| `T` _extends_ [`TypedObject`](../interfaces/TypedObject.md) | [`TypedObject`](../interfaces/TypedObject.md) | Type of Portable Text value. |
| `Children`                                                  | `unknown`                                     | Type of children.            |

## Properties

### Component

```ts
Component: Component<T>;
```

Component associated with the Portable Text node.

---

### props

```ts
props: Props<T>;
```

Props passed to the component.

---

### children?

```ts
optional children?: Children;
```

Children associated with the Portable Text node.

If the node is a custom [type](../interfaces/PortableTextComponents.md#type) or a
[TextNode](TextNode.md), then children will be `undefined`.
