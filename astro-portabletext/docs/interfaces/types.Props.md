[astro-portabletext](../README.md) / [types](../modules/types.md) / Props

# Interface: Props\<N\>

[types](../modules/types.md).Props

Component Props

## Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `N` | extends [`TypedObject`](types.TypedObject.md) | Type of Portable Text payload that this component will receive on its `node` property |

## Table of contents

### Properties

- [node](types.Props.md#node)
- [index](types.Props.md#index)
- [isInline](types.Props.md#isInline)

## Properties

### <a id="node" name="node"></a> node

• **node**: `N`

Portable Text data for this node

___

### <a id="index" name="index"></a> index

• **index**: `number`

Index within its parent

___

### <a id="isInline" name="isInline"></a> isInline

• **isInline**: `boolean`

Whether the component should be layed out as inline or block element
