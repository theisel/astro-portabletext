[**`astro-portabletext` v1.0.0 • Type Definitions**](../README.md)

---

# Type Alias: RenderOptions

```ts
type RenderOptions = object;
```

Options for the `render` function accessed via `usePortableText`.

## Properties

### type?

```ts
optional type?: RenderHandler<TypedObject, never>;
```

Custom render function for custom types.

---

### block?

```ts
optional block?: RenderHandler<Block>;
```

Custom render function for block nodes.

---

### list?

```ts
optional list?: RenderHandler<List>;
```

Custom render function for list nodes.

---

### listItem?

```ts
optional listItem?: RenderHandler<ListItem>;
```

Custom render function for list item nodes.

---

### mark?

```ts
optional mark?: RenderHandler<Mark>;
```

Custom render function for mark nodes.

---

### text?

```ts
optional text?: RenderHandler<TextNode, never>;
```

Custom render function for text nodes.

---

### hardBreak?

```ts
optional hardBreak?: RenderHandler<TextNode, never>;
```

Custom render function for hard breaks.
