[**`astro-portabletext` • Type Definitions**](../README.md)

***

# Interface: TypedObject

Any object with an `_type` property (which is required in portable text arrays),
as well as a _potential_ `_key` (highly encouraged)

## Properties

### \_type

```ts
_type: string;
```

Identifies the type of object/span this is, and is used to pick the correct React components
to use when rendering a span or inline object with this type.

***

### \_key?

```ts
optional _key: string;
```

Uniquely identifies this object within its parent block.
Not _required_, but highly encouraged.
