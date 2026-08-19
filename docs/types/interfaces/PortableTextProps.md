[**`astro-portabletext` v0.13.0 • Type Definitions**](../README.md)

---

# Interface: PortableTextProps\<Value\>

Properties for the `PortableText` component.

## Type Parameters

| Type Parameter                                    | Default type                                  | Description                  |
| ------------------------------------------------- | --------------------------------------------- | ---------------------------- |
| `Value` _extends_ [`TypedObject`](TypedObject.md) | `PortableTextBlock` \| `ArbitraryTypedObject` | Type of Portable Text value. |

## Properties

### value

```ts
value: Value | Value[];
```

Portable Text value.

---

### components?

```ts
optional components?: Partial<PortableTextComponents>;
```

Components to render nodes.

---

### onMissingComponent?

```ts
optional onMissingComponent?:
  | boolean
  | MissingComponentHandler;
```

Function to call when an `unknown` component type is encountered.

#### Remarks

- Prints a warning message to the console by default.
- Set to `false` to disable warnings.

---

### listNestingMode?

```ts
optional listNestingMode?: ToolkitListNestMode;
```

Defines how nested lists are rendered. Defaults to `html`.

#### Remarks

- `html` - Deeper list nodes will appear as a child of the last list item in the parent list
- `direct` - Deeper list nodes will appear as a direct child of the parent list

#### See

[ToolkitListNestMode](https://portabletext.github.io/toolkit/types/ToolkitListNestMode.html)
