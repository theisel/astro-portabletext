[**`astro-portabletext` v0.13.0 • Type Definitions**](../README.md)

---

# Type Alias: MissingComponentHandler

```ts
type MissingComponentHandler = (message, context) => void;
```

The shape of the [onMissingComponent](../interfaces/PortableTextProps.md#onmissingcomponent) function

## Parameters

| Parameter          | Type                                                           |
| ------------------ | -------------------------------------------------------------- |
| `message`          | `string`                                                       |
| `context`          | \{ `type`: `string`; `nodeType`: [`NodeType`](NodeType.md); \} |
| `context.type`     | `string`                                                       |
| `context.nodeType` | [`NodeType`](NodeType.md)                                      |

## Returns

`void`
