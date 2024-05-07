[astro-portabletext](../README.md) / types

# Module: types

## Table of contents

### Interfaces

- [PortableTextProps](../interfaces/types.PortableTextProps.md)
- [PortableTextComponents](../interfaces/types.PortableTextComponents.md)
- [Props](../interfaces/types.Props.md)
- [Block](../interfaces/types.Block.md)
- [Mark](../interfaces/types.Mark.md)
- [TypedObject](../interfaces/types.TypedObject.md)

### Type Aliases

- [SomePortableTextComponents](types.md#SomePortableTextComponents)
- [List](types.md#List)
- [ListItem](types.md#ListItem)
- [TextNode](types.md#TextNode)
- [MissingComponentHandler](types.md#MissingComponentHandler)

## Type Aliases

### <a id="SomePortableTextComponents" name="SomePortableTextComponents"></a> SomePortableTextComponents

Ƭ **SomePortableTextComponents**: `Partial`\<[`PortableTextComponents`](../interfaces/types.PortableTextComponents.md)\>

Object defining how some Portable Text types should be rendered

___

### <a id="List" name="List"></a> List

Ƭ **List**: `ToolkitPortableTextList`

Alias to [ToolkitPortableTextList](https://portabletext.github.io/toolkit/types/ToolkitPortableTextList.html)

**`Example`**

```ts
---
import type { List, Props as $ } from "astro-portabletext/types";

export type Props = $<List>;
---
```

___

### <a id="ListItem" name="ListItem"></a> ListItem

Ƭ **ListItem**: `ToolkitPortableTextListItem`

Alias to [ToolkitPortableTextListItem](https://portabletext.github.io/toolkit/interfaces/ToolkitPortableTextListItem.html)

**`Example`**

```ts
---
import type { ListItem, Props as $ } from "astro-portabletext/types";

export type Props = $<ListItem>;
---
```

___

### <a id="TextNode" name="TextNode"></a> TextNode

Ƭ **TextNode**: `ToolkitTextNode`

Alias to [ToolkitTextNode](https://portabletext.github.io/toolkit/interfaces/ToolkitTextNode.html)

**`Example`**

```ts
---
import type { TextNode, Props as $ } from "astro-portabletext/types";

export type Props = $<TextNode>;
---
```

___

### <a id="MissingComponentHandler" name="MissingComponentHandler"></a> MissingComponentHandler

Ƭ **MissingComponentHandler**: (`message`: `string`, `context`: \{ `type`: `string` ; `nodeType`: `NodeType`  }) => `void`

The shape of the [onMissingComponent](../interfaces/types.PortableTextProps.md#onMissingComponent) function

#### Type declaration

▸ (`message`, `context`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `context` | `Object` |
| `context.type` | `string` |
| `context.nodeType` | `NodeType` |

##### Returns

`void`
