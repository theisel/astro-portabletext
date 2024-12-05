[**astro-portabletext**](../../README.md)

***

[astro-portabletext](../../README.md) / [types](../README.md) / Mark

# Interface: Mark\<MarkDef\>

Extends [ToolkitNestedPortableTextSpan](https://portabletext.github.io/toolkit/interfaces/ToolkitNestedPortableTextSpan.html)
with consisting `markDef` and `markKey` properties

## Remarks

Refer to [buildMarksTree](https://github.com/portabletext/toolkit/blob/36c51bd360aa7bc9f8b1f47dbe4a8b6adb4b566a/src/buildMarksTree.ts#L92)

## Example

```ts
---
import type { Mark, Props as $ } from "astro-portabletext/types";

type Greet = { msg: string };

export type Props = $<Mark<Greet>>;

const { node } = Astro.props;
// node.markDef.msg is of type `string`
---
```

## Extends

- `ToolkitNestedPortableTextSpan`

## Type Parameters

• **MarkDef** *extends* `Record`\<`string`, `unknown`\> \| `undefined` = `undefined`

Object defining the shape of `markDef` property

## Properties

### markDef

> **markDef**: `MarkDef` & `PortableTextMarkDefinition`

Holds the value (definition) of the mark in the case of annotations.
`undefined` if the mark is a decorator (strong, em or similar).

#### Overrides

`ToolkitNestedPortableTextSpan.markDef`

***

### markKey

> **markKey**: `string`

The key of the mark definition (in the case of annotations).
`undefined` if the mark is a decorator (strong, em or similar).

#### Overrides

`ToolkitNestedPortableTextSpan.markKey`

***

### \_type

> **\_type**: `"@span"`

Type name, prefixed with `@` to signal that this is a toolkit-specific node.

#### Inherited from

`ToolkitNestedPortableTextSpan._type`

***

### \_key?

> `optional` **\_key**: `string`

Unique key for this span

#### Inherited from

`ToolkitNestedPortableTextSpan._key`

***

### markType

> **markType**: `string`

Type of the mark. For annotations, this is the `_type` property of the value.
For decorators, it will hold the name of the decorator (strong, em or similar).

#### Inherited from

`ToolkitNestedPortableTextSpan.markType`

***

### children

> **children**: (`ArbitraryTypedObject` \| `ToolkitNestedPortableTextSpan`\<`PortableTextMarkDefinition`\> \| `ToolkitTextNode`)[]

Child nodes of this span. Can be toolkit-specific text nodes, nested spans
or any inline object type.

#### Inherited from

`ToolkitNestedPortableTextSpan.children`
