---
"astro-portabletext": minor
---

**BREAKING CHANGE** `astro-portabletext/components`

- Removed `BlockProps` type

  ```diff
  - import type { BlockProps } from "astro-portabletext/components";
  + import type { Block, Props as $ } from "astro-portabletext/types";
  ```
  ```js
  // type BlockProps = $<Block>;
  ```

- Removed `ListProps` type

  ```diff
  - import type { ListProps } from "astro-portabletext/components";
  + import type { List, Props as $ } from "astro-portabletext/types";
  ```
  ```js
  // type ListProps = $<List>;
  ```

- Removed `ListItemProps` type

  ```diff
  - import type { ListItemProps } from "astro-portabletext/components";
  + import type { ListItem, Props as $ } from "astro-portabletext/types";
  ```
  ```js
    // type ListItemProps = $<ListItem>;
    ```

- Removed `MarkProps` type

  ```diff
  - import type { MarkProps } from "astro-portabletext/components";
  + import type { Mark, Props as $ } from "astro-portabletext/types";
  ```
  ```js
  // type MarkProps = $<Mark<{...}>>;
  ```
