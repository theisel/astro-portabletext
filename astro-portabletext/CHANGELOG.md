# astro-portabletext

## 0.4.1

### Patch Changes

- 29815b8: Fixes PortableText `onMissingComponent` prop to accept boolean

  ```diff
  - onMissingComponent?: MissingComponentHandler | false;
  + onMissingComponent?: MissingComponentHandler | boolean;
  ```

## 0.4.0

### Minor Changes

- 1c102cf: Feat: Made `mergeComponents` and `toPlainText` functions available to be used.
- f8b9a06: Removed deprecated types
- c6cbd3b: Redefined `Block` type with property `style` set to `normal`.

  - `style` is set to `normal` when `undefined` during render phase.
  - Depreacted `BlockStyle` in favour for `Block`.

- a6bfa8e: Feat: Made `Block`, `List`, `ListItem` and `Mark` components available to be used to help extend custom components.
- 11ffafc: **BREAKING** Changed `NodeType` type from `enum` to `string`

  - This effects `PortableText` prop `onMissingComponent` handler

- d1b38ea: **BREAKING** `Props<N>` type `N` parameter should extend `TypedObject`.

  ```diff
  - import type { Props as $ } from "astro-portabletext/types";
  + import type { Props as $, TypedObject } from "astro-portabletext/types";

  - interface Greet {
  + interface Greet extends TypedObject {
    greeting: string;
  };

  export type Props = $<Greet>;
  ```

- 9753535: **BREAKING** Brings in consistent naming, which reflects **Portable Text** node types.

  **_T_ NodeType**

  ```diff
  - type NodeType = "block" | "blockStyle" | "listStyle" | "listItemStyle" | "mark";
  + type NodeType = "type" | "block" | "list" | "listItem" | "mark";
  ```

  **_T_ PortableTextComponents**

  | Property  | Counterpart                        |
  | :-------- | :--------------------------------- |
  | type      | unknownType                        |
  | block     | ~~unknownBlockStyle~~ unknownBlock |
  | list      | unknownList                        |
  | listItem  | unknownListItem                    |
  | mark      | unknownMark                        |
  | hardBreak |                                    |

  **PortableText**

  ```diff
  <PortableText
    components={{
  -   unknownBlockStyle: /* custom component */;
  +   unknownBlock: /* custom component */;
    }}
  >
  ```

### Patch Changes

- 8644be2: Fixes [object Generator] output error

## 0.4.0-next.5

### Patch Changes

- 8644be2: Fixes [object Generator] output error

## 0.4.0-next.4

### Minor Changes

- c6cbd3b: Redefined `Block` type with property `style` set to `normal`.

  - `style` is set to `normal` when `undefined` during render phase.
  - Depreacted `BlockStyle` in favour for `Block`.

## 0.4.0-next.3

### Minor Changes

- 11ffafc: **BREAKING** Changed `NodeType` type from `enum` to `string`

  - This effects `PortableText` prop `onMissingComponent` handler

- 9753535: Brings in consistent naming, which reflects **Portable Text** node types.

  **_T_ NodeType**

  ```diff
  - type NodeType = "block" | "blockStyle" | "listStyle" | "listItemStyle" | "mark";
  + type NodeType = "type" | "block" | "list" | "listItem" | "mark";
  ```

  **_T_ PortableTextComponents**

  | Property  | Counterpart                        |
  | :-------- | :--------------------------------- |
  | type      | unknownType                        |
  | block     | ~~unknownBlockStyle~~ unknownBlock |
  | list      | unknownList                        |
  | listItem  | unknownListItem                    |
  | mark      | unknownMark                        |
  | hardBreak |                                    |

  **PortableText**

  ```diff
  <PortableText
    components={{
  -   unknownBlockStyle: /* custom component */;
  +   unknownBlock: /* custom component */;
    }}
  >
  ```

## 0.4.0-next.2

### Minor Changes

- d1b38ea: **BREAKING** `Props<N>` type `N` parameter should extend `TypedObject`.

  ```diff
  - import type { Props as $ } from "astro-portabletext/types";
  + import type { Props as $, TypedObject } from "astro-portabletext/types";

  - interface Greet {
  + interface Greet extends TypedObject {
    greeting: string;
  };

  export type Props = $<Greet>;
  ```

## 0.4.0-next.1

### Patch Changes

- 130921c: Changed property `astroClass` on `Props` type to `optional`.

  Related to #ddc12ce and #a6bfa8e.

## 0.4.0-next.0

### Minor Changes

- 1c102cf: Feat: Made `mergeComponents` and `toPlainText` functions available to be used.
- f8b9a06: Removed deprecated types
- ddc12ce: Feat: Added `class` property to `Props` type and deprecated `astroClass`
- a6bfa8e: Feat: Made `Block`, `List`, `ListItem` and `Mark` components available to be used to help extend custom components.

## 0.3.0

### Minor Changes

- 900d39a: Feat: New types added and deprecated some types
- 900d39a: PortableText `components.list` and `components.listItem` are now an object for easy merge/override
- 900d39a: Feat: Unhandled `style` in `Block` component and unhandled `markType` in `Mark` component now throws an error
- 900d39a: Replaces warning message with \<slot /\>
- 900d39a: Unknown `components.type` is hidden by default

### Patch Changes

- 900d39a: Adds `onMissingComponent` prop to `PortableText`

## 0.3.0-next.0

### Minor Changes

- 7b83ffe: Feat: New types added and deprecated some types
- a353768: PortableText `components.list` and `components.listItem` are now an object for easy merge/override
- 7c52ca2: Feat: Unhandled `style` in `Block` component and unhandled `markType` in `Mark` component now throws an error
- ab19744: Replaces warning message with \<slot /\>
- 4f362ed: Unknown `components.type` is hidden by default

### Patch Changes

- 9b72bbc: Adds `onMissingComponent` prop to `PortableText`

## 0.2.4

### Patch Changes

- 70d85d4: Fixes css imports #2

## 0.2.3

### Patch Changes

- 8ef55a1: - Changes entry file extension to `.js`

  - Adds missing `main` field in package.json

- 07ca7a4: - Sets `normal` as default block style

  - Fixes mark type `link`

  - Fixes unescaped strings

  - Removes whitespace around strings

## 0.2.3-next.1

### Patch Changes

- - Changes entry file extension to `.js`

  - Adds missing `main` field in package.json

## 0.2.3-next.0

### Patch Changes

- - Sets `normal` as default block style

  - Fixes mark type `link`

  - Fixes unescaped strings

  - Removes whitespace around strings

## 0.2.2

### Patch Changes

- Add missing `repository`, `bugs` and `homepage` fields to `package.json`.
  This patch is for npm registery to display the relevant links.

## 0.2.1

### Patch Changes

- ffbe857: Fixed an issue where Typescript couldn't find `astro-portabletext/types`

## 0.2.1-next.0

### Patch Changes

- Fixed an issue where Typescript couldn't find `astro-portabletext/types`
