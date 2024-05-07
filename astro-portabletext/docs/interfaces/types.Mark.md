[astro-portabletext](../README.md) / [types](../modules/types.md) / Mark

# Interface: Mark\<MarkDef\>

[types](../modules/types.md).Mark

Extends [ToolkitNestedPortableTextSpan](https://portabletext.github.io/toolkit/interfaces/ToolkitNestedPortableTextSpan.html)
with consisting `markDef` and `markKey` properties

**`Remarks`**

Refer to [buildMarksTree](https://github.com/portabletext/toolkit/blob/36c51bd360aa7bc9f8b1f47dbe4a8b6adb4b566a/src/buildMarksTree.ts#L92)

**`Example`**

```ts
---
import type { Mark, Props as $ } from "astro-portabletext/types";

type Greet = { msg: string };

export type Props = $<Mark<Greet>>;

const { node } = Astro.props;
// node.markDef.msg is of type `string`
---
```

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `MarkDef` | extends `Record`\<`string`, `unknown`\> \| `undefined` = `undefined` | Object defining the shape of `markDef` property |

## Hierarchy

- `ToolkitNestedPortableTextSpan`

  ↳ **`Mark`**

## Table of contents

### Properties

- [markDef](types.Mark.md#markDef)
- [markKey](types.Mark.md#markKey)
- [\_type](types.Mark.md#_type)
- [\_key](types.Mark.md#_key)
- [markType](types.Mark.md#markType)
- [children](types.Mark.md#children)

## Properties

### <a id="markDef" name="markDef"></a> markDef

• **markDef**: `MarkDef` & `PortableTextMarkDefinition`

#### Overrides

ToolkitNestedPortableTextSpan.markDef

___

### <a id="markKey" name="markKey"></a> markKey

• **markKey**: `string`

#### Overrides

ToolkitNestedPortableTextSpan.markKey

___

### <a id="_type" name="_type"></a> \_type

• **\_type**: ``"@span"``

Type name, prefixed with `@` to signal that this is a toolkit-specific node.

#### Inherited from

ToolkitNestedPortableTextSpan.\_type

___

### <a id="_key" name="_key"></a> \_key

• `Optional` **\_key**: `string`

Unique key for this span

#### Inherited from

ToolkitNestedPortableTextSpan.\_key

___

### <a id="markType" name="markType"></a> markType

• **markType**: `string`

Type of the mark. For annotations, this is the `_type` property of the value.
For decorators, it will hold the name of the decorator (strong, em or similar).

#### Inherited from

ToolkitNestedPortableTextSpan.markType

___

### <a id="children" name="children"></a> children

• **children**: (`ArbitraryTypedObject` \| `ToolkitNestedPortableTextSpan`\<`PortableTextMarkDefinition`\> \| `ToolkitTextNode`)[]

Child nodes of this span. Can be toolkit-specific text nodes, nested spans
or any inline object type.

#### Inherited from

ToolkitNestedPortableTextSpan.children
