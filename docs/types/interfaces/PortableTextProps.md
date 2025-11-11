[**`astro-portabletext` • Type Definitions**](../README.md)

***

# Interface: PortableTextProps\<Value\>

Properties for the `PortableText` component

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `Value` *extends* [`TypedObject`](TypedObject.md) | `PortableTextBlock` \| `ArbitraryTypedObject` | Type of Portable Text payload |

## Properties

### value

```ts
value: Value | Value[];
```

Portable Text payload

***

### components?

```ts
optional components: SomePortableTextComponents;
```

Components for rendering

***

### onMissingComponent?

```ts
optional onMissingComponent: 
  | boolean
  | MissingComponentHandler;
```

Function to call when faced with unknown types.

#### Remarks

- Prints a warning message to the console by default.
- Use `false` to disable.

***

### listNestingMode?

```ts
optional listNestingMode: ToolkitListNestMode;
```

Defines the nesting mode for lists. The value can be `html` or `direct`, and defaults to `html`.

#### Remarks

- `html` - Deeper list nodes will appear as a child of the last list item in the parent list
- `direct` - Deeper list nodes will appear as a direct child of the parent list

#### See

[ToolkitListNestMode](https://portabletext.github.io/toolkit/types/ToolkitListNestMode.html)
