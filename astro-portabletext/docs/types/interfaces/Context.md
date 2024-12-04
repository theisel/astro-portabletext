[**astro-portabletext**](../../README.md)

***

[astro-portabletext](../../README.md) / [types](../README.md) / Context

# Interface: Context

Context object providing access to rendering utilities within a Portable Text tree.

## Properties

### getDefaultComponent()

> **getDefaultComponent**: () => [`Component`](../type-aliases/Component.md)\<`any`\>

Function to retrieve the default astro-portabletext component associated with a node, such as `Block`, `List`, etc.

#### Returns

[`Component`](../type-aliases/Component.md)\<`any`\>

***

### getUnknownComponent()

> **getUnknownComponent**: () => [`Component`](../type-aliases/Component.md)\<`any`\>

Function to retrieve the unknown component associated with a node, such as `unknownBlock`, `unknownList`, etc.

#### Returns

[`Component`](../type-aliases/Component.md)\<`any`\>

***

### render()

> **render**: (`options`) => `any`

Function to customize the rendering of specific node types.

#### Parameters

##### options

[`RenderOptions`](../type-aliases/RenderOptions.md)

#### Returns

`any`
