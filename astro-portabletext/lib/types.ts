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
   * How text should be rendered
   */
  text: Component<TextNode>;
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
 * Convenience type for {@link Block} component props
 */
export type BlockProps = Props<Block>;

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
 * Convenience type for {@link List} component props
 */
export type ListProps = Props<List>;

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
 * Convenience type for {@link ListItem} component props
 */
export type ListItemProps = Props<ListItem>;

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
 * Convenience type for {@link Mark} component props
 */
export type MarkProps<
  MarkDef extends Record<string, unknown> | undefined = undefined,
> = Props<Mark<MarkDef>>;

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
 * Convenience type for {@link TextNode} component props
 */
export type TextNodeProps = Props<TextNode>;

/**
 * The shape of the {@link PortableTextProps.onMissingComponent onMissingComponent} function
 */
export type MissingComponentHandler = (
  message: string,
  context: { type: string; nodeType: NodeType }
) => void;

/**
 * Properties for the `RenderHandler` function
 */
export type RenderHandlerProps<
  T extends TypedObject = TypedObject,
  Children = unknown,
> = {
  /**
   * The component to be rendered. This is a function that takes props and returns a rendered output
   */
  Component: Component<T>;
  props: Props<T>;
  children?: Children;
};

/**
 * The shape of the render component function
 *
 * @typeParam T - Type of Portable Text payload
 * @typeParam Children - Type of children
 */
export type RenderHandler<
  T extends TypedObject = TypedObject,
  Children = unknown,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
> = (props: RenderHandlerProps<T, Children>) => any;

/**
 * Options for the `render` function accessed via `usePortableText`
 */
export type RenderOptions = {
  type?: RenderHandler<TypedObject, never>;
  block?: RenderHandler<Block>;
  list?: RenderHandler<List>;
  listItem?: RenderHandler<ListItem>;
  mark?: RenderHandler<Mark>;
  text?: RenderHandler<TextNode, never>;
  hardBreak?: RenderHandler<TextNode, never>;
};

/**
 * Context object providing access to rendering utilities within a Portable Text tree.
 *
 * @property getDefaultComponent - Function to retrieve the default astro-portabletext component associated with a node, such as `Block`, `List`, etc.
 * @property getUnknownComponent - Function to retrieve the unknown component associated with a node, such as `unknownBlock`, `unknownList`, etc.
 * @property render - Function to customize the rendering of specific node types.
 */
export interface Context {
  getDefaultComponent: () => Component;
  getUnknownComponent: () => Component;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (options: RenderOptions) => any;
}

/**
 * Generic Portable Text component
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Component<T extends TypedObject = any> = (props: Props<T>) => any;

/**
 * For internal use
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentOrRecord<T extends TypedObject = any> =
  | Component<T>
  | Record<string, Component<T>>;

/**
 * @internal
 */
export type NodeType = "type" | "block" | "list" | "listItem" | "mark";
