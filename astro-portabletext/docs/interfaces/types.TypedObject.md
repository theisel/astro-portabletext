[astro-portabletext](../README.md) / [types](../modules/types.md) / TypedObject

# Interface: TypedObject

[types](../modules/types.md).TypedObject

Any object with an `_type` property (which is required in portable text arrays),
as well as a _potential_ `_key` (highly encouraged)

## Table of contents

### Properties

- [\_type](types.TypedObject.md#_type)
- [\_key](types.TypedObject.md#_key)

## Properties

### <a id="_type" name="_type"></a> \_type

• **\_type**: `string`

Identifies the type of object/span this is, and is used to pick the correct React components
to use when rendering a span or inline object with this type.

___

### <a id="_key" name="_key"></a> \_key

• `Optional` **\_key**: `string`

Uniquely identifies this object within its parent block.
Not _required_, but highly encouraged.
