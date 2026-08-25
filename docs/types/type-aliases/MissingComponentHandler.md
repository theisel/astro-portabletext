[**`astro-portabletext` v1.0.0 • Type Definitions**](../README.md)

---

# Type Alias: MissingComponentHandler

```ts
type MissingComponentHandler = (message, context) => void;
```

Type of the [onMissingComponent](../interfaces/PortableTextProps.md#onmissingcomponent) handler.

## Parameters

| Parameter          | Type                                                           |
| ------------------ | -------------------------------------------------------------- |
| `message`          | `string`                                                       |
| `context`          | \{ `type`: `string`; `nodeType`: [`NodeType`](NodeType.md); \} |
| `context.type`     | `string`                                                       |
| `context.nodeType` | [`NodeType`](NodeType.md)                                      |

## Returns

`void`
