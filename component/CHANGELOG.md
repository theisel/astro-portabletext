# astro-portabletext

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
