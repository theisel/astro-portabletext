[**`astro-portabletext` v0.13.0 • Type Definitions**](../README.md)

---

# Interface: Props\<N\>

Base props type for Portable Text components.

## See

- [BlockProps](../type-aliases/BlockProps.md) for `block` component props type.
- [ListProps](../type-aliases/ListProps.md) for `list` component props type.
- [ListItemProps](../type-aliases/ListItemProps.md) for `listItem` component props type.
- [MarkProps](../type-aliases/MarkProps.md) for `mark` component props type.
- [TextNodeProps](../type-aliases/TextNodeProps.md) for `text` component props type.

## Type Parameters

| Type Parameter                                | Description                                                 |
| --------------------------------------------- | ----------------------------------------------------------- |
| `N` _extends_ [`TypedObject`](TypedObject.md) | Type of Portable Text node received on the `node` property. |

## Properties

### node

```ts
node: N;
```

Portable Text node.

---

### index

```ts
index: number;
```

Index of the current node within its parent's child list.

---

### isInline

```ts
isInline: boolean;
```

Indicates whether the node should render as an inline or block element.
