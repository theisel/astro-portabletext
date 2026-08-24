[**`astro-portabletext` v0.13.0 • Type Definitions**](../README.md)

---

# Type Alias: RenderHandler\<T, Children\>

```ts
type RenderHandler<T, Children> = (props) => any;
```

The shape of the render component function.

## Type Parameters

| Type Parameter                                              | Default type                                  | Description                  |
| ----------------------------------------------------------- | --------------------------------------------- | ---------------------------- |
| `T` _extends_ [`TypedObject`](../interfaces/TypedObject.md) | [`TypedObject`](../interfaces/TypedObject.md) | Type of Portable Text value. |
| `Children`                                                  | `unknown`                                     | Type of children.            |

## Parameters

| Parameter | Type                                                             |
| --------- | ---------------------------------------------------------------- |
| `props`   | [`RenderHandlerProps`](RenderHandlerProps.md)\<`T`, `Children`\> |

## Returns

`any`
