[**`astro-portabletext` • Type Definitions**](../README.md)

***

# Type Alias: RenderHandler()\<T, Children\>

```ts
type RenderHandler<T, Children>: (props) => any;
```

The shape of the render component function

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` *extends* [`TypedObject`](../interfaces/TypedObject.md) | [`TypedObject`](../interfaces/TypedObject.md) | Type of Portable Text payload |
| `Children` | `unknown` | Type of children |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `props` | [`RenderHandlerProps`](RenderHandlerProps.md)\<`T`, `Children`\> |

## Returns

`any`
