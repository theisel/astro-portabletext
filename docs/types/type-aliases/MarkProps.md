[**`astro-portabletext` v1.0.0 • Type Definitions**](../README.md)

---

# Type Alias: MarkProps\<MarkDef\>

```ts
type MarkProps<MarkDef> = Props<Mark<MarkDef>>;
```

Component props type for [Mark](../interfaces/Mark.md).

## Type Parameters

| Type Parameter                                                     | Default type |
| ------------------------------------------------------------------ | ------------ |
| `MarkDef` _extends_ `Record`\<`string`, `unknown`\> \| `undefined` | `undefined`  |

## Remarks

Added in: `v0.11.0`

## Example

```tsx
---
import type { MarkProps } from "astro-portabletext/types";

type Greet = { msg: string };
type Props = MarkProps<Greet>;
---
```
