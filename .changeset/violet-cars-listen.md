---
"astro-portabletext": minor
---

**BREAKING** `Props<N>` type `N` parameter should extend `TypedObject`.

```diff
- import type { Props as $ } from "astro-portabletext/types";
+ import type { Props as $, TypedObject } from "astro-portabletext/types";

- interface Greet {
+ interface Greet extends TypedObject {
  greeting: string;
};

export type Props = $<Greet>;
```
