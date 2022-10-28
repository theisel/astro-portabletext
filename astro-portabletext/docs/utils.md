[**`astro-portabletext`**](../README.md) > [**`docs`**](README.md)

# Utils

```ts
import {/* select utility function */} "astro-portabletext/utils";
```

## usePortableText

Should only be used within a custom `block|list|listItem|mark|type` handler.

&#9656; **usePortableText**(`node`): `object`

| Name | Type     | Description                                                   |
| :--- | :------- | :------------------------------------------------------------ |
| node | `object` | The `Portable Text` payload that is passed into the component |

&#9656; **Returns `object`**

| Property                        | Type       | Description                                                                                                                      |
| :------------------------------ | :--------- | :------------------------------------------------------------------------------------------------------------------------------- |
| getDefaultComponent             | `function` | Returns the `default` component related to the passed in `node`. Use this when you need to fall back to the `default` component. |
| getUnknownComponent             | `function` | Returns the counterpart `unknown(Block\|List\|ListItem\|Mark\|Type)` component related to the passed in `node`.                  |
| notifyMissingComponentHandler   | `function` | Calls `onMissingComponent` handler. Pass in a `string` to override `default` message.                                            |
| next `deprecated`               | `function` | Use `getDefaultComponent`                                                                                                        |
| onMissingComponent `deprecated` | `function` | Use `notifyMissingComponentHandler`                                                                                              |

## toPlainText

&#9656; **toPlainText**(`blocks`): `string`

| Name   | Type                | Description           |
| :----- | :------------------ | :-------------------- |
| blocks | `array` \| `object` | Portable Text payload |

See [https://portabletext.github.io/toolkit/modules.html#toPlainText](https://portabletext.github.io/toolkit/modules.html#toPlainText) for details.

## mergeComponents

&#9656; **mergeComponents**(`components`, `overrides`): `object`

| Name       | Type     | Description                                                    |
| :--------- | :------- | :------------------------------------------------------------- |
| components | `object` | See [components](portabletext-component.md#components) options |
| overrides  | `object` | See [components](portabletext-component.md#components) options |
