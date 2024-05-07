[astro-portabletext](../README.md) / utils

# Module: utils

## Table of contents

### Functions

- [usePortableText](utils.md#usePortableText)
- [mergeComponents](utils.md#mergeComponents)
- [toPlainText](utils.md#toPlainText)

## Functions

### <a id="usePortableText" name="usePortableText"></a> usePortableText

▸ **usePortableText**(`node`): `Context`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`TypedObject`](../interfaces/types.TypedObject.md) |

#### Returns

`Context`

___

### <a id="mergeComponents" name="mergeComponents"></a> mergeComponents

▸ **mergeComponents**\<`Components`, `Overrides`, `MergedComponents`\>(`components`, `overrides`): `MergedComponents`

Helper to merge [SomePortableTextComponents](types.md#SomePortableTextComponents)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Components` | extends `Partial`\<[`PortableTextComponents`](../interfaces/types.PortableTextComponents.md)\> |
| `Overrides` | extends `Partial`\<[`PortableTextComponents`](../interfaces/types.PortableTextComponents.md)\> |
| `MergedComponents` | \{ [Key in string \| number \| symbol]: Key extends keyof Components & keyof Overrides ? Overrides[Key\<Key\>] extends Component\<any\> ? any[any] : Components[Key\<Key\>] extends Component\<any\> ? Overrides[Key\<Key\>] : (Overrides & Components)[Key\<Key\>] : (Overrides & Components)[Key] } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `components` | `Components` |
| `overrides` | `Overrides` |

#### Returns

`MergedComponents`

___

### <a id="toPlainText" name="toPlainText"></a> toPlainText

▸ **toPlainText**(`block`): `string`

Takes a Portable Text block (or an array of them) and returns the text value
of all the Portable Text span nodes. Adds whitespace when encountering inline,
non-span nodes to ensure text flow is optimal.

Note that this only accounts for regular Portable Text blocks - any text inside
custom content types are not included in the output.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `block` | `PortableTextBlock`\<`PortableTextMarkDefinition`, `ArbitraryTypedObject` \| `PortableTextSpan`, `string`, `string`\> \| `ArbitraryTypedObject`[] \| `PortableTextBlock`\<`PortableTextMarkDefinition`, `ArbitraryTypedObject` \| `PortableTextSpan`, `string`, `string`\>[] | Single block or an array of blocks to extract text from |

#### Returns

`string`

The plain-text content of the blocks
