# astro-portabletext

## [0.12.0](https://github.com/theisel/astro-portabletext/compare/astro-portabletext@0.11.4...astro-portabletext@0.12.0) (2025-11-11)


### ⚠ BREAKING CHANGES

* **deps:** Upstream dependencies now require Node `>=20.19 <22 || >=22.12`.

### Features

* **deps:** bump dependencies requiring Node &gt;=20.19 ([#215](https://github.com/theisel/astro-portabletext/issues/215)) ([91ce43c](https://github.com/theisel/astro-portabletext/commit/91ce43c85f288270b2756ca226d9e4be32bd08e2))

## [0.11.4](https://github.com/theisel/astro-portabletext/compare/astro-portabletext@0.11.3...astro-portabletext@0.11.4) (2025-11-11)


### Bug Fixes

* **astro-portabletext:** handle nullish values and refactor slot rendering ([#213](https://github.com/theisel/astro-portabletext/issues/213)) ([37a4a27](https://github.com/theisel/astro-portabletext/commit/37a4a276577bc2333c422d39dc3c02977db5122a))

## [0.11.3](https://github.com/theisel/astro-portabletext/compare/astro-portabletext@0.11.2...astro-portabletext@0.11.3) (2025-09-09)


### Bug Fixes

* **deps:** bump @portabletext/toolkit to v3.0.1 ([#209](https://github.com/theisel/astro-portabletext/issues/209)) ([8de9200](https://github.com/theisel/astro-portabletext/commit/8de92008ee4f5c765918de830eec96d2003b61c0))

## [0.11.2](https://github.com/theisel/astro-portabletext/compare/astro-portabletext@0.11.1...astro-portabletext@0.11.2) (2025-08-25)


### Bug Fixes

* **astro-portabletext:** update dependencies to latest versions ([#207](https://github.com/theisel/astro-portabletext/issues/207)) ([09d8eb5](https://github.com/theisel/astro-portabletext/commit/09d8eb56bdfd95e25d4e8bfc7ce056daab96970e))

## [0.11.1](https://github.com/theisel/astro-portabletext/compare/astro-portabletext@0.11.0...astro-portabletext@0.11.1) (2025-02-07)


### Bug Fixes

* **deps:** update @portabletext/toolkit v2.0.17 ([#195](https://github.com/theisel/astro-portabletext/issues/195)) ([8ebdc47](https://github.com/theisel/astro-portabletext/commit/8ebdc47966aa53b5a0202d8e69f43e4b9004c9f9))

## [0.11.0](https://github.com/theisel/astro-portabletext/compare/astro-portabletext@0.10.1...astro-portabletext@0.11.0) (2024-12-18)


### Features

* **api:** add `spanToPlainText` function (docs updated) ([#180](https://github.com/theisel/astro-portabletext/issues/180)) ([4cac38d](https://github.com/theisel/astro-portabletext/commit/4cac38deddf84bc92c5a8a976e50d87798c01a0d)), closes [#178](https://github.com/theisel/astro-portabletext/issues/178)
* **api:** consolidate exports and improve library organisation ([#169](https://github.com/theisel/astro-portabletext/issues/169)) ([0245fee](https://github.com/theisel/astro-portabletext/commit/0245feef8df93adcb1a62212381cc06f53f18b10))
* **api:** enhance customisation with `slots` and `render` function ([#167](https://github.com/theisel/astro-portabletext/issues/167)) ([9d6a9e8](https://github.com/theisel/astro-portabletext/commit/9d6a9e86640d4bfeaaaebb7d394147df58bf600b)), closes [#158](https://github.com/theisel/astro-portabletext/issues/158)
* **api:** simplify component prop imports with type aliases ([#171](https://github.com/theisel/astro-portabletext/issues/171)) ([f41f695](https://github.com/theisel/astro-portabletext/commit/f41f6954ae918733dcbe0be09f5dca7f664877a7))
* **component:** enable custom text rendering in PortableText ([#165](https://github.com/theisel/astro-portabletext/issues/165)) ([80c147a](https://github.com/theisel/astro-portabletext/commit/80c147ac544a0e35270a6bd89fcfa699a2c19cd5))


### Performance Improvements

* **component:** cache Portable Text nodes ([#167](https://github.com/theisel/astro-portabletext/issues/167)) ([9d6a9e8](https://github.com/theisel/astro-portabletext/commit/9d6a9e86640d4bfeaaaebb7d394147df58bf600b))

## [0.10.1](https://github.com/theisel/astro-portabletext/compare/astro-portabletext@0.10.0...astro-portabletext@0.10.1) (2024-11-04)


### Bug Fixes

* **deps:** bump @portabletext/toolkit to v2.0.16 ([#159](https://github.com/theisel/astro-portabletext/issues/159)) ([3ab5d15](https://github.com/theisel/astro-portabletext/commit/3ab5d150f4342d7c0ec258d1e21f43912c1f0f20))

## [0.10.0](https://github.com/theisel/astro-portabletext/compare/astro-portabletext@0.9.9...astro-portabletext@0.10.0) (2024-05-07)


### ⚠ BREAKING CHANGES

* **component:** drop `class` prop from `PortableText` ([#143](https://github.com/theisel/astro-portabletext/issues/143))

### Documentation

* automate documentation and fixes ([#146](https://github.com/theisel/astro-portabletext/issues/146)) ([7a1730a](https://github.com/theisel/astro-portabletext/commit/7a1730a9b66fae80fa25e8e9f4f2f18f40739785))


### Bug Fixes

* **types:** fix docblock comments ([#141](https://github.com/theisel/astro-portabletext/issues/141)) ([421afdb](https://github.com/theisel/astro-portabletext/commit/421afdb2122eef9d5162ac1d0e9542dce1a16a1a))


### Code Refactoring

* **component:** drop `class` prop from `PortableText` ([#143](https://github.com/theisel/astro-portabletext/issues/143)) ([b0b77c4](https://github.com/theisel/astro-portabletext/commit/b0b77c4e03835a6b479ff7829832164487dcfb82))

## [0.9.9](https://github.com/theisel/astro-portabletext/compare/astro-portabletext@0.9.8...astro-portabletext@0.9.9) (2024-04-21)


### Bug Fixes

* block index ([#138](https://github.com/theisel/astro-portabletext/issues/138)) ([d0f4ed8](https://github.com/theisel/astro-portabletext/commit/d0f4ed8e8bcc9d638527f59ddd8e3ca74441fee0))

## [0.9.8](https://github.com/theisel/astro-portabletext/compare/astro-portabletext@0.9.7...astro-portabletext@0.9.8) (2024-04-13)


### Bug Fixes

* add LICENSE ([#133](https://github.com/theisel/astro-portabletext/issues/133)) ([a7b026f](https://github.com/theisel/astro-portabletext/commit/a7b026f77c1bec2b309e8f4d5b42579a33193435))
* **deps:** update `astro-portabletext` dependencies ([#131](https://github.com/theisel/astro-portabletext/issues/131)) ([8c9612d](https://github.com/theisel/astro-portabletext/commit/8c9612d872b873b14b640fead9e8f24faa7269b6))

## [0.9.7](https://github.com/theisel/astro-portabletext/compare/astro-portabletext@0.9.6...astro-portabletext@0.9.7) (2024-03-19)


### Bug Fixes

* **deps:** update `astro-portabletext` ([#126](https://github.com/theisel/astro-portabletext/issues/126)) ([8e576a7](https://github.com/theisel/astro-portabletext/commit/8e576a724795dbe613b13851268f1d40ec5a4f0d))

## [0.9.6](https://github.com/theisel/astro-portabletext/compare/astro-portabletext@0.9.5...astro-portabletext@0.9.6) (2023-10-13)


### Bug Fixes

* **astro-portabletext:** fix [#92](https://github.com/theisel/astro-portabletext/issues/92) ([#103](https://github.com/theisel/astro-portabletext/issues/103)) ([9d96e54](https://github.com/theisel/astro-portabletext/commit/9d96e5470e50e17dc5a3b1f40488e00c259a9862))

## [0.9.5](https://github.com/theisel/astro-portabletext/compare/astro-portabletext@0.9.4...astro-portabletext@0.9.5) (2023-10-11)


### Bug Fixes

* **astro-portabletext:** update dependencies and fix [#92](https://github.com/theisel/astro-portabletext/issues/92) ([#100](https://github.com/theisel/astro-portabletext/issues/100)) ([5cbea17](https://github.com/theisel/astro-portabletext/commit/5cbea17371c1e127ab6c16aac3bde931c4deb134))

## [0.9.4](https://github.com/theisel/astro-portabletext/compare/astro-portabletext@0.9.3...astro-portabletext@0.9.4) (2023-08-24)

Bumped version to force new release

`v0.9.3` skipped NPM release due to "not up to date" lockfile

## [0.9.3](https://github.com/theisel/astro-portabletext/compare/astro-portabletext@0.9.2...astro-portabletext@0.9.3) (2023-08-24)

Bumped version to force new release

`v0.9.2` skipped NPM release due to "not up to date" lockfile

## [0.9.2](https://github.com/theisel/astro-portabletext/compare/astro-portabletext@0.9.1...astro-portabletext@0.9.2) (2023-08-24)

### Bug Fixes

- **deps:** update `astro-portabletext` dependencies ([#67](https://github.com/theisel/astro-portabletext/issues/67), [#73](https://github.com/theisel/astro-portabletext/issues/73)) ([a712143](https://github.com/theisel/astro-portabletext/commit/a712143cb1d84e262ce98a9093b32611b93d87cc), [2fbb149](https://github.com/theisel/astro-portabletext/commit/2fbb14991192f04675cc2543aa7084e35891a188))
- **lib/types:** interface `Mark` ([#62](https://github.com/theisel/astro-portabletext/issues/62)) ([33df21b](https://github.com/theisel/astro-portabletext/commit/33df21b1fe68fc9489c26c94259d1c7affe87dc7))

## 0.9.1

### Patch Changes

- fd36945: Added `author` details to `package.json`
- 2305446: Added `author` to `package.json`

## 0.9.0

### Minor Changes

- d56e161: BREAKING CHANGE
  - `Props` type requires a `TypedObject` to be passed in and no longer defaults to `ArbitraryTypedObject`
- 1eb192e: **BREAKING**

  **astro-portabletext/utils**

  - `usePortableText(node)`
    - Removed: `getWarningMessage` function
      - Meant for internal use
    - Removed: `notifyMissingComponentHandler` function
      - This is handled for you and has no purpose
    - Removed: _deprecated_ `next` function
      - Use `getDefaultComponent`
    - Removed: _deprecated_ `onMissingComponent` function

- f95c9da: **BREAKING CHANGE** `astro-portabletext/components`

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

### Patch Changes

- d56e161: Fixes `exports` field
- d56e161: Removed compiling step for package release:

  - Pre-compiling isn't necessary as Astro handles Typescript for us

## 0.9.0-next.4

### Minor Changes

- f95c9da: **BREAKING CHANGE** `astro-portabletext/components`

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

## 0.9.0-next.3

### Minor Changes

- 2904f5c: BREAKING CHANGE
  - `Props` type requires a `TypedObject` to be passed in and no longer defaults to `ArbitraryTypedObject`

## 0.9.0-next.2

### Patch Changes

- c643b8c: Fixes `exports` field

## 0.9.0-next.1

### Patch Changes

- 343552e: Removed compiling step for package release:

  - Pre-compiling isn't necessary as Astro handles Typescript for us

## 0.9.0-next.0

### Minor Changes

- 1eb192e: **BREAKING**

  **astro-portabletext/utils**

  - `usePortableText(node)`
    - Removed: `getWarningMessage` function
      - Meant for internal use
    - Removed: `notifyMissingComponentHandler` function
      - This is handled for you and has no purpose
    - Removed: _deprecated_ `next` function
      - Use `getDefaultComponent`
    - Removed: _deprecated_ `onMissingComponent` function

## 0.8.1

### Patch Changes

- e49f2ab: Added `PortableTextBlock` type to `PortableTextProps<Value>` parameter

## 0.8.0

### Minor Changes

- dab66b0: #22 / missing export LIST_NEST_MODE_HTML

  Updated dependencies to fix the issue. Thanks @TaraBryn.

  | Package               | From  | To    |
  | --------------------- | ----- | ----- |
  | @portabletext/toolkit | 1.0.6 | 2.0.1 |
  | @portabletext/types   | 2.0.0 | 2.0.2 |

## 0.8.0-next.0

### Minor Changes

- dab66b0: #22 / missing export LIST_NEST_MODE_HTML

  Updated dependencies to fix the issue. Thanks @TaraBryn.

  | Package               | From  | To    |
  | --------------------- | ----- | ----- |
  | @portabletext/toolkit | 1.0.6 | 2.0.1 |
  | @portabletext/types   | 2.0.0 | 2.0.2 |

## 0.7.0

### Minor Changes

- 9ba2709: Feat: `usePortableText(node)` utility function returns new properties and some have been deprecated.

  Refer to the `utils docs` for usage.

  **Added**

  | Property                      | Type       | Description                                                                                                                      |
  | :---------------------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------- |
  | getDefaultComponent           | `function` | Returns the `default` component related to the passed in `node`. Use this when you need to fall back to the `default` component. |
  | getUnknownComponent           | `function` | Returns the counterpart `unknown(Block\|List\|ListItem\|Mark\|Type)` component related to the passed in `node`.                  |
  | notifyMissingComponentHandler | `function` | Calls `onMissingComponent` handler. Pass in a `string` to override `default` message.                                            |

  **Deprecated**

  | Property           | Type       | Description                         |
  | :----------------- | :--------- | :---------------------------------- |
  | next               | `function` | Use `getDefaultComponent`           |
  | onMissingComponent | `function` | Use `notifyMissingComponentHandler` |

- aa3201a: Updated dependency `@portabletext/types` from v1 to v2

### Patch Changes

- c9547e1: Feat: Added [`<menu>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu) to `components` props `list` type
- 67cdf4c: Fixes "Cannot redefine property: Symbol(astro-portabletext)" error

  Astro in `dev` mode caused an issue on refresh

- 4f194e6: Fixes missing `components.listItem.menu` default component

## 0.7.0-next.4

### Patch Changes

- 4f194e6: Fixes missing `components.listItem.menu` default component

## 0.7.0-next.3

### Patch Changes

- c9547e1: Feat: Added [`<menu>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu) to `components` props `list` type

## 0.7.0-next.2

### Patch Changes

- 67cdf4c: Fixes "Cannot redefine property: Symbol(astro-portabletext)" error

  Astro in `dev` mode caused an issue on refresh

## 0.7.0-next.1

### Minor Changes

- aa3201a: Updated dependency `@portabletext/types` from v1 to v2

## 0.7.0-next.0

### Minor Changes

- Feat: `usePortableText(node)` utility function returns new properties and some have been deprecated.

  Refer to the `utils docs` for usage.

  **Added**

  | Property                      | Type       | Description                                                                                                                      |
  | :---------------------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------- |
  | getDefaultComponent           | `function` | Returns the `default` component related to the passed in `node`. Use this when you need to fall back to the `default` component. |
  | getUnknownComponent           | `function` | Returns the counterpart `unknown(Block\|List\|ListItem\|Mark\|Type)` component related to the passed in `node`.                  |
  | notifyMissingComponentHandler | `function` | Calls `onMissingComponent` handler. Pass in a `string` to override `default` message.                                            |

  **Deprecated**

  | Property           | Type       | Description                         |
  | :----------------- | :--------- | :---------------------------------- |
  | next               | `function` | Use `getDefaultComponent`           |
  | onMissingComponent | `function` | Use `notifyMissingComponentHandler` |

## 0.6.1

### Patch Changes

- f10099f: Perf: Flushes `context` at end of `PortableText` render
- ab96ddc: Fixes build failing.

  - Cannot redefine property: `$key`

## 0.6.0

### Minor Changes

- 1c205e7: Feat: `usePortableText` to get context for the current Portable Text node.

  ```ts
  ---
  import { Props as ComponentProps } from "astro-portabletext/types";
  import { usePortableText } from "astro-portabletext/utils";

  export type Props = ComponentProps;

  const props = Astro.props;
  const { node } = props;
  const { next } = usePortableText(node);
  const FallbackComponent = next();
  ---

  <FallbackComponent {...props}>
    <slot />
  </FallbackComponent>
  ```

### Patch Changes

- fb3cdf5: Fixes: #14 Client-side components are no longer reactive

## 0.5.0

### Minor Changes

- cfaaf38: **BREAKING**

  - Removed deprecated `BlockStyle` type; use `Block` type instead
  - Removed deprecated `isBlockStyle`; a utility _type guard_ function which is tied to `BlockStyle`
    and has no purpose

### Patch Changes

- 46c62f6: Fixes #13 `UnknownType.astro` failed during build
- 7809f2f: Fixes error thrown in `block`, `list`, `listItem`, `mark` and `type`
  components to fall back to their `unknown` counterpart.

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
