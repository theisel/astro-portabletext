[**astro-portabletext**](../../README.md)

***

[astro-portabletext](../../README.md) / [types](../README.md) / PortableTextProps

# Interface: PortableTextProps\<Value\>

Properties for the `PortableText` component

## Type Parameters

• **Value** *extends* [`TypedObject`](TypedObject.md) = `PortableTextBlock` \| `ArbitraryTypedObject`

Type of Portable Text payload

## Properties

### value

> **value**: `Value` \| `Value`[]

Portable Text payload

***

### components?

> `optional` **components**: `Partial`\<[`PortableTextComponents`](PortableTextComponents.md)\>

Components for rendering

***

### onMissingComponent?

> `optional` **onMissingComponent**: `boolean` \| [`MissingComponentHandler`](../type-aliases/MissingComponentHandler.md)

Function to call when faced with unknown types.

#### Remarks

- Prints a warning message to the console by default.
- Use `false` to disable.

***

### listNestingMode?

> `optional` **listNestingMode**: `ToolkitListNestMode`

Value can be `html` or `direct`, defaults to `html`

#### See

[ToolkitListNestMode](https://portabletext.github.io/toolkit/types/ToolkitListNestMode.html)
