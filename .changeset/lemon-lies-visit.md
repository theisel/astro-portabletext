---
"astro-portabletext": minor
---
**BREAKING**

**astro-portabletext/utils**
- `usePortableText(node)`
  - Removed: `getWarningMessage` function
    - Meant for internal use
  - Removed: `notifyMissingComponentHandler` function
    - This is handled for you and has no purpose
  - Removed: _deprecated_ `next` function
    - Use `getDefaultComponent`
  - Removed: _deprecated_ `onMissingComponent` function
