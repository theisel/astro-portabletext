[**`astro-portabletext` • Type Definitions**](../README.md)

***

# Interface: Mark\<MarkDef\>

Extends [ToolkitNestedPortableTextSpan](https://portabletext.github.io/toolkit/interfaces/ToolkitNestedPortableTextSpan.html)
with consisting `markDef` and `markKey` properties

## Remarks

To concisely achieve the same result in the example, use the convenience type [MarkProps](../type-aliases/MarkProps.md) instead.

## Example

```ts
---
import type { Mark, Props as $ } from "astro-portabletext/types";

type Greet = { msg: string };
type Props = $<Mark<Greet>>;
---
```

## Extends

- `ToolkitNestedPortableTextSpan`

## Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `MarkDef` *extends* `Record`\<`string`, `unknown`\> \| `undefined` | `undefined` | Defines the shape of `markDef` property |

## Properties

### \_type

```ts
_type: "@span";
```

Type name, prefixed with `@` to signal that this is a toolkit-specific node.

#### Inherited from

```ts
ToolkitNestedPortableTextSpan._type
```

***

### \_key?

```ts
optional _key: string;
```

Unique key for this span

#### Inherited from

```ts
ToolkitNestedPortableTextSpan._key
```

***

### markType

```ts
markType: string;
```

Type of the mark. For annotations, this is the `_type` property of the value.
For decorators, it will hold the name of the decorator (strong, em or similar).

#### Inherited from

```ts
ToolkitNestedPortableTextSpan.markType
```

***

### children

```ts
children: (
  | ArbitraryTypedObject
  | ToolkitTextNode
  | ToolkitNestedPortableTextSpan<PortableTextMarkDefinition>)[];
```

Child nodes of this span. Can be toolkit-specific text nodes, nested spans
or any inline object type.

#### Inherited from

```ts
ToolkitNestedPortableTextSpan.children
```

***

### markDef

```ts
markDef: MarkDef & PortableTextMarkDefinition;
```

Holds the value (definition) of the mark in the case of annotations.
`undefined` if the mark is a decorator (strong, em or similar).

#### Overrides

```ts
ToolkitNestedPortableTextSpan.markDef
```

***

### markKey

```ts
markKey: string;
```

The key of the mark definition (in the case of annotations).
`undefined` if the mark is a decorator (strong, em or similar).

#### Overrides

```ts
ToolkitNestedPortableTextSpan.markKey
```
