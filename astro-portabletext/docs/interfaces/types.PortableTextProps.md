[astro-portabletext](../README.md) / [types](../modules/types.md) / PortableTextProps

# Interface: PortableTextProps\<Value\>

[types](../modules/types.md).PortableTextProps

Properties for the `PortableText` component

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Value` | extends [`TypedObject`](types.TypedObject.md) = `PortableTextBlock` \| `ArbitraryTypedObject` | Type of Portable Text payload |

## Table of contents

### Properties

- [value](types.PortableTextProps.md#value)
- [components](types.PortableTextProps.md#components)
- [onMissingComponent](types.PortableTextProps.md#onMissingComponent)
- [listNestingMode](types.PortableTextProps.md#listNestingMode)

## Properties

### <a id="value" name="value"></a> value

• **value**: `Value` \| `Value`[]

Portable Text payload

___

### <a id="components" name="components"></a> components

• `Optional` **components**: `Partial`\<[`PortableTextComponents`](types.PortableTextComponents.md)\>

Components for rendering

___

### <a id="onMissingComponent" name="onMissingComponent"></a> onMissingComponent

• `Optional` **onMissingComponent**: `boolean` \| [`MissingComponentHandler`](../modules/types.md#MissingComponentHandler)

Function to call when faced with unknown types.

**`Remarks`**

- Prints a warning message to the console by default.
- Use `false` to disable.

___

### <a id="listNestingMode" name="listNestingMode"></a> listNestingMode

• `Optional` **listNestingMode**: `ToolkitListNestMode`

Value can be `html` or `direct`, defaults to `html`

**`See`**

[ToolkitListNestMode](https://portabletext.github.io/toolkit/types/ToolkitListNestMode.html)
