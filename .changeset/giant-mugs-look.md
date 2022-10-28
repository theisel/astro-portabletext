---
"astro-portabletext": minor
---

Feat: `usePortableText(node)` utility function returns new properties and some have been deprecated.

Refer to the `utils docs` for usage.

**Added**

| Property                        | Type       | Description                                                                                                                      |
| :------------------------------ | :--------- | :------------------------------------------------------------------------------------------------------------------------------- |
| getDefaultComponent             | `function` | Returns the `default` component related to the passed in `node`. Use this when you need to fall back to the `default` component. |
| getUnknownComponent             | `function` | Returns the counterpart `unknown(Block\|List\|ListItem\|Mark\|Type)` component related to the passed in `node`.                  |
| notifyMissingComponentHandler   | `function` | Calls `onMissingComponent` handler. Pass in a `string` to override `default` message.                                            |

**Deprecated**

| Property                        | Type       | Description                                                                                                                      |
| :------------------------------ | :--------- | :------------------------------------------------------------------------------------------------------------------------------- |
| next | `function` | Use `getDefaultComponent`                                                                                                        |
| onMissingComponent | `function` | Use `notifyMissingComponentHandler`                                                                                              |