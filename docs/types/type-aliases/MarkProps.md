[**`astro-portabletext` • Type Definitions**](../README.md)

***

# Type Alias: MarkProps\<MarkDef\>

```ts
type MarkProps<MarkDef>: Props<Mark<MarkDef>>;
```

Convenience type for [Mark](../interfaces/Mark.md) component props

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `MarkDef` *extends* `Record`\<`string`, `unknown`\> \| `undefined` | `undefined` |

## Example

```ts
---
import type { MarkProps } from "astro-portabletext/types";

type Greet = { msg: string };
type Props = MarkProps<Greet>;
---
```
