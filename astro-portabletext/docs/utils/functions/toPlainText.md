[**astro-portabletext**](../../README.md) • **Docs**

***

[astro-portabletext](../../README.md) / [utils](../README.md) / toPlainText

# Function: toPlainText()

> **toPlainText**(`block`): `string`

Takes a Portable Text block (or an array of them) and returns the text value
of all the Portable Text span nodes. Adds whitespace when encountering inline,
non-span nodes to ensure text flow is optimal.

Note that this only accounts for regular Portable Text blocks - any text inside
custom content types are not included in the output.

## Parameters

• **block**: `PortableTextBlock`\<`PortableTextMarkDefinition`, `ArbitraryTypedObject` \| `PortableTextSpan`, `string`, `string`\> \| `ArbitraryTypedObject`[] \| `PortableTextBlock`\<`PortableTextMarkDefinition`, `ArbitraryTypedObject` \| `PortableTextSpan`, `string`, `string`\>[]

Single block or an array of blocks to extract text from

## Returns

`string`

The plain-text content of the blocks
