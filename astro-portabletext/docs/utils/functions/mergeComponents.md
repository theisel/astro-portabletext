[**astro-portabletext**](../../README.md)

***

[astro-portabletext](../../README.md) / [utils](../README.md) / mergeComponents

# Function: mergeComponents()

> **mergeComponents**\<`Components`, `Overrides`, `MergedComponents`\>(`components`, `overrides`): `MergedComponents`

Helper to merge [SomePortableTextComponents](../../types/type-aliases/SomePortableTextComponents.md)

## Type Parameters

• **Components** *extends* `Partial`\<[`PortableTextComponents`](../../types/interfaces/PortableTextComponents.md)\>

• **Overrides** *extends* `Partial`\<[`PortableTextComponents`](../../types/interfaces/PortableTextComponents.md)\>

• **MergedComponents** = \{ \[Key in string \| number \| symbol\]: Key extends keyof Components & keyof Overrides ? Overrides\[Key\<Key\>\] extends Component ? any\[any\] : Components\[Key\<Key\>\] extends Component ? Overrides\[Key\<Key\>\] : (Overrides & Components)\[Key\<Key\>\] : (Overrides & Components)\[Key\] \}

## Parameters

### components

`Components`

### overrides

`Overrides`

## Returns

`MergedComponents`
