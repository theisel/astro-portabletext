[**`astro-portabletext` • Type Definitions**](../README.md)

***

# Type Alias: RenderOptions

```ts
type RenderOptions = object;
```

Options for the `render` function accessed via `usePortableText`

## Properties

### type?

```ts
optional type: RenderHandler<TypedObject, never>;
```

***

### block?

```ts
optional block: RenderHandler<Block>;
```

***

### list?

```ts
optional list: RenderHandler<List>;
```

***

### listItem?

```ts
optional listItem: RenderHandler<ListItem>;
```

***

### mark?

```ts
optional mark: RenderHandler<Mark>;
```

***

### text?

```ts
optional text: RenderHandler<TextNode, never>;
```

***

### hardBreak?

```ts
optional hardBreak: RenderHandler<TextNode, never>;
```
