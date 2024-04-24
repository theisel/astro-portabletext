import type {
  ToolkitListNestMode,
  ToolkitNestedPortableTextSpan,
  ToolkitPortableTextList,
  ToolkitPortableTextListItem,
  ToolkitTextNode,
} from "@portabletext/toolkit";

import type {
  ArbitraryTypedObject,
  PortableTextBlock,
  PortableTextBlockStyle,
  PortableTextMarkDefinition,
  TypedObject,
} from "@portabletext/types";

import type { Component, ComponentOrRecord, NodeType } from "./internal";

export type { TypedObject } from "@portabletext/types";

/**
 * Properties for the `PortableText` component
 *
 * @typeParam Value - Type of Portable Text payload
 */
export interface PortableTextProps<
  Value extends TypedObject = PortableTextBlock | ArbitraryTypedObject,
> {
  /**
   * Portable Text payload
   */
  value: Value | Value[];

  /**
   * Components for rendering
   */
  components?: SomePortableTextComponents;

  /**
   * Function to call when faced with unknown types.
   *
   * @remarks
   * - Prints a warning message to the console by default.
   * - Use `false` to disable.
   */
  onMissingComponent?: MissingComponentHandler | boolean;

  /**
   * Value can be `html` or `direct`, defaults to `html`
   *
   * @see {@link https://portabletext.github.io/toolkit/types/ToolkitListNestMode.html ToolkitListNestMode}
   */
  listNestingMode?: ToolkitListNestMode;
}

/**
 * Object defining how Portable Text types should be rendered
 */
export interface PortableTextComponents {
  /**
   * How user-defined types should be rendered
   */
  type: ComponentOrRecord;
  /**
   * Used when a {@link PortableTextComponents.type type} component isn't found
   */
  unknownType: Component;
  /**
   * How blocks should be rendered
   */
  block: ComponentOrRecord<Block>;
  /**
   * Used when a {@link PortableTextComponents.block block} component isn't found
   */
  unknownBlock: Component<Block>;
  /**
   * How lists should be rendered
   */
  list: ComponentOrRecord<List>;
  /**
   * Used when a {@link PortableTextComponents.list list} component isn't found
   */
  unknownList: Component<List>;
  /**
   * How list items should be rendered
   */
  listItem: ComponentOrRecord<ListItem>;
  /**
   * Used when a {@link PortableTextComponents.listItem listItem} component isn't found
   */
  unknownListItem: Component<ListItem>;
  /**
   * How marked text should be rendered
   */
  mark: ComponentOrRecord<Mark<never>>;
  /**
   * Used when a {@link PortableTextComponents.mark mark} component isn't found
   */
  unknownMark: Component<Mark<never>>;
  /**
   * How line breaks should be rendered
   */
  hardBreak: Component<TextNode>;
}

/**
 * Object defining how some Portable Text types should be rendered
 */
export type SomePortableTextComponents = Partial<PortableTextComponents>;

/**
 * Component Props
 *
 * @typeParam N - Type of Portable Text payload that this component will receive on its `node` property
 */
export interface Props<N extends TypedObject> {
  /**
   * Portable Text data for this node
   */
  node: N;
  /**
   * Index within its parent
   */
  index: number;
  /**
   * Whether the component should be layed out as inline or block element
   */
  isInline: boolean;
}

/**
 * Alias to {@link https://portabletext.github.io/types/interfaces/PortableTextBlock.html PortableTextBlock} with `style` set to `normal`
 *
 * @example
 * ```ts
 * ---
 * import type { Block, Props as $ } from "astro-portabletext/types";
 *
 * export type Props = $<Block>;
 * ---
 * ```
 */
export interface Block extends PortableTextBlock {
  style: "normal" | PortableTextBlockStyle;
}

/**
 * Alias to {@link https://portabletext.github.io/toolkit/types/ToolkitPortableTextList.html ToolkitPortableTextList}
 *
 * @example
 * ```ts
 * ---
 * import type { List, Props as $ } from "astro-portabletext/types";
 *
 * export type Props = $<List>;
 * ---
 * ```
 */
export type List = ToolkitPortableTextList;

/**
 * Alias to {@link https://portabletext.github.io/toolkit/interfaces/ToolkitPortableTextListItem.html ToolkitPortableTextListItem}
 *
 * @example
 * ```ts
 * ---
 * import type { ListItem, Props as $ } from "astro-portabletext/types";
 *
 * export type Props = $<ListItem>;
 * ---
 * ```
 */
export type ListItem = ToolkitPortableTextListItem;

/**
 * Extends {@link https://portabletext.github.io/toolkit/interfaces/ToolkitNestedPortableTextSpan.html ToolkitNestedPortableTextSpan}
 * with consisting `markDef` and `markKey` properties
 *
 * @typeParam MarkDef - Object defining the shape of `markDef` property
 *
 * @remarks
 * Refer to {@link https://github.com/portabletext/toolkit/blob/36c51bd360aa7bc9f8b1f47dbe4a8b6adb4b566a/src/buildMarksTree.ts#L92 buildMarksTree}
 *
 * @example
 * ```ts
 * ---
 * import type { Mark, Props as $ } from "astro-portabletext/types";
 *
 * type Greet = { msg: string };
 *
 * export type Props = $<Mark<Greet>>;
 *
 * const { node } = Astro.props;
 * // node.markDef.msg is of type `string`
 * ---
 * ```
 */
export interface Mark<
  MarkDef extends Record<string, unknown> | undefined = undefined,
> extends ToolkitNestedPortableTextSpan {
  markDef: MarkDef & PortableTextMarkDefinition;
  markKey: string;
}

/**
 * Alias to {@link https://portabletext.github.io/toolkit/interfaces/ToolkitTextNode.html ToolkitTextNode}
 *
 * @example
 * ```ts
 * ---
 * import type { TextNode, Props as $ } from "astro-portabletext/types";
 *
 * export type Props = $<TextNode>;
 * ---
 * ```
 */
export type TextNode = ToolkitTextNode;

/**
 * The shape of the {@link PortableTextProps.onMissingComponent onMissingComponent} function
 */
export type MissingComponentHandler = (
  message: string,
  context: { type: string; nodeType: NodeType }
) => void;
