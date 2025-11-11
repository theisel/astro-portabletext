[**`astro-portabletext` • Type Definitions**](../README.md)

***

# Interface: PortableTextComponents

Defines how Portable Text types should be rendered.

## Properties

### type

```ts
type: ComponentOrRecord;
```

Component or mapping of components for rendering `custom` types.

***

### unknownType

```ts
unknownType: Component;
```

Used when a [type](#type) component isn't found.

***

### block

```ts
block: ComponentOrRecord<Block>;
```

Component or mapping of components for rendering `block` styles.

***

### unknownBlock

```ts
unknownBlock: Component<Block>;
```

Used when a [block](#block) component isn't found.

***

### list

```ts
list: ComponentOrRecord<ToolkitPortableTextList>;
```

Component or mapping of components for rendering `list` item type.

***

### unknownList

```ts
unknownList: Component<ToolkitPortableTextList>;
```

Used when a [list](#list) component isn't found.

***

### listItem

```ts
listItem: ComponentOrRecord<ToolkitPortableTextListItem>;
```

Component or mapping of components for rendering `list` item type.

***

### unknownListItem

```ts
unknownListItem: Component<ToolkitPortableTextListItem>;
```

Used when a [listItem](#listitem) component isn't found.

***

### mark

```ts
mark: ComponentOrRecord<Mark<never>>;
```

Component or mapping of components for rendering `mark` definition type.

***

### unknownMark

```ts
unknownMark: Component<Mark<never>>;
```

Used when a [mark](#mark) component isn't found.

***

### text

```ts
text: Component<ToolkitTextNode>;
```

Component for rendering `spans` of text.

#### Remarks

Added in: `v0.11.0`

***

### hardBreak

```ts
hardBreak: Component<ToolkitTextNode>;
```

Component for rendering a newline `\n` of text.
