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
 * Properties for the `PortableText` component.
 *
 * @typeParam Value - Type of Portable Text value.
 */
export interface PortableTextProps<
  Value extends TypedObject = PortableTextBlock | ArbitraryTypedObject,
> {
  /**
   * Portable Text value.
   */
  value: Value | Value[];

  /**
   * Components to render nodes.
   */
  components?: SomePortableTextComponents;

  /**
   * Function to call when an `unknown` component type is encountered.
   *
   * @remarks
   * - Prints a warning message to the console by default.
   * - Set to `false` to disable warnings.
   */
  onMissingComponent?: MissingComponentHandler | boolean;

  /**
   * Defines how nested lists are rendered. Defaults to `html`.
   *
   * @remarks
   * - `html` - Deeper list nodes will appear as a child of the last list item in the parent list
   * - `direct` - Deeper list nodes will appear as a direct child of the parent list
   *
   * @see {@link https://portabletext.github.io/toolkit/types/ToolkitListNestMode.html ToolkitListNestMode}
   */
  listNestingMode?: ToolkitListNestMode;
}

/**
 * Defines how Portable Text types should be rendered.
 */
export interface PortableTextComponents {
  /**
   * Component or mapping of components for rendering custom types.
   */
  type: ComponentOrRecord;
  /**
   * Used when a {@link PortableTextComponents.type type} component isn't found.
   */
  unknownType: Component;
  /**
   * Component or mapping of components for rendering block styles.
   */
  block: ComponentOrRecord<Block>;
  /**
   * Used when a {@link PortableTextComponents.block block} component isn't found.
   */
  unknownBlock: Component<Block>;
  /**
   * Component or mapping of components for rendering lists.
   */
  list: ComponentOrRecord<List>;
  /**
   * Used when a {@link PortableTextComponents.list list} component isn't found.
   */
  unknownList: Component<List>;
  /**
   * Component or mapping of components for rendering list items.
   */
  listItem: ComponentOrRecord<ListItem>;
  /**
   * Used when a {@link PortableTextComponents.listItem listItem} component isn't found.
   */
  unknownListItem: Component<ListItem>;
  /**
   * Component or mapping of components for rendering marks.
   */
  mark: ComponentOrRecord<Mark<never>>;
  /**
   * Used when a {@link PortableTextComponents.mark mark} component isn't found.
   */
  unknownMark: Component<Mark<never>>;
  /**
   * Component for rendering spans of text.
   *
   * @remarks
   * Added in: `v0.11.0`
   */
  text: Component<TextNode>;
  /**
   * Component for rendering a newline (\n).
   */
  hardBreak: Component<TextNode>;
}

/**
 * Defines how some Portable Text types should be rendered.
 */
export type SomePortableTextComponents = Partial<PortableTextComponents>;

/**
 * Base props type for Portable Text components.
 *
 * @see {@link BlockProps} for `block` component props type.
 * @see {@link ListProps} for `list` component props type.
 * @see {@link ListItemProps} for `listItem` component props type.
 * @see {@link MarkProps} for `mark` component props type.
 * @see {@link TextNodeProps} for `text` component props type.
 *
 * @typeParam N - Type of Portable Text node received on the `node` property.
 */
export interface Props<N extends TypedObject> {
  /**
   * Portable Text node.
   */
  node: N;
  /**
   * Index of the current node within its parent's child list.
   */
  index: number;
  /**
   * Indicates whether the node should render as an inline or block element.
   */
  isInline: boolean;
}

/**
 * Component props type for a standard Portable Text node.
 *
 * @remarks
 * Added in: `v1.0.0`
 */
export type TypedObjectProps = Props<TypedObject>;

/**
 * Alias to {@link https://portabletext.github.io/types/interfaces/PortableTextBlock.html PortableTextBlock}
 * with `style` set to `normal` when undefined
 *
 *
 * @see {@link BlockProps} for the `block` component props type.
 */
export interface Block extends PortableTextBlock {
  style: "normal" | PortableTextBlockStyle;
}

/**
 * Component props type for {@link Block}.
 *
 * @remarks
 * Added in: `v0.11.0`
 *
 * @example
 * ```tsx
 * ---
 * import type { BlockProps } from "astro-portabletext/types";
 *
 * type Props = BlockProps;
 * ---
 * ```
 */
export type BlockProps = Props<Block>;

/**
 * Portable Text `list` node.
 *
 * @see {@link ListProps} for the `list` component props type.
 * @see {@link https://portabletext.github.io/toolkit/types/ToolkitPortableTextList.html ToolkitPortableTextList}
 */
export type List = ToolkitPortableTextList;

/**
 * Component props type for {@link List}.
 *
 * @remarks
 * Added in: `v0.11.0`
 *
 * @example
 * ```tsx
 * ---
 * import type { ListProps } from "astro-portabletext/types";
 *
 * type Props = ListProps;
 * ---
 * ```
 */
export type ListProps = Props<List>;

/**
 * Portable Text `listItem` node.
 *
 * @see {@link ListItemProps} for the `listItem` component props type.
 * @see {@link https://portabletext.github.io/toolkit/interfaces/ToolkitPortableTextListItem.html ToolkitPortableTextListItem}
 */
export type ListItem = ToolkitPortableTextListItem;

/**
 * Component props type for {@link ListItem}.
 *
 * @remarks
 * Added in: `v0.11.0`
 *
 * @example
 * ```tsx
 * ---
 * import type { ListItemProps } from "astro-portabletext/types";
 *
 * type Props = ListItemProps;
 * ---
 * ```
 */
export type ListItemProps = Props<ListItem>;

/**
 * Portable Text `mark` node.
 *
 * Extends {@link https://portabletext.github.io/toolkit/interfaces/ToolkitNestedPortableTextSpan.html ToolkitNestedPortableTextSpan}
 * with `markDef` and `markKey` properties.
 *
 * @typeParam MarkDef - Defines the shape of `markDef` property.
 *
 * @see {@link MarkProps} for the `mark` component props type.
 */
export interface Mark<
  MarkDef extends Record<string, unknown> | undefined = undefined,
> extends ToolkitNestedPortableTextSpan {
  markDef: MarkDef & PortableTextMarkDefinition;
  markKey: string;
}

/**
 * Component props type for {@link Mark}.
 *
 * @remarks
 * Added in: `v0.11.0`
 *
 * @example
 * ```tsx
 * ---
 * import type { MarkProps } from "astro-portabletext/types";
 *
 * type Greet = { msg: string };
 * type Props = MarkProps<Greet>;
 * ---
 * ```
 */
export type MarkProps<
  MarkDef extends Record<string, unknown> | undefined = undefined,
> = Props<Mark<MarkDef>>;

/**
 * Portable Text `text` node.
 *
 * @see {@link TextNodeProps} for the `text` component props type.
 * @see {@link https://portabletext.github.io/toolkit/interfaces/ToolkitTextNode.html ToolkitTextNode}
 */
export type TextNode = ToolkitTextNode;

/**
 * Component props type for {@link TextNode}.
 *
 * @remarks
 * Added in: `v0.11.0`
 *
 * @example
 * ```tsx
 * ---
 * import type { TextNodeProps } from "astro-portabletext/types";
 *
 * type Props = TextNodeProps;
 * ---
 * ```
 */
export type TextNodeProps = Props<TextNode>;

/**
 * Type of the {@link PortableTextProps.onMissingComponent onMissingComponent} handler.
 */
export type MissingComponentHandler = (
  message: string,
  context: { type: string; nodeType: NodeType }
) => void;

/**
 * Properties for the `RenderHandler` function.
 *
 * @typeParam T - Type of Portable Text value.
 * @typeParam Children - Type of children.
 */
export type RenderHandlerProps<
  T extends TypedObject = TypedObject,
  Children = unknown,
> = {
  /**
   * Component associated with the Portable Text node.
   */
  Component: Component<T>;
  /**
   * Props passed to the component.
   */
  props: Props<T>;
  /**
   * Children associated with the Portable Text node.
   *
   * If the node is a custom {@link PortableTextComponents.type type} or a
   * {@link TextNode}, then children will be `undefined`.
   */
  children?: Children;
};

/**
 * The shape of the render component function.
 *
 * @typeParam T - Type of Portable Text value.
 * @typeParam Children - Type of children.
 */
export type RenderHandler<
  T extends TypedObject = TypedObject,
  Children = unknown,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
> = (props: RenderHandlerProps<T, Children>) => any;

/**
 * Options for the `render` function accessed via `usePortableText`.
 */
export type RenderOptions = {
  /** Custom render function for custom types. */
  type?: RenderHandler<TypedObject, never>;
  /** Custom render function for block nodes. */
  block?: RenderHandler<Block>;
  /** Custom render function for list nodes. */
  list?: RenderHandler<List>;
  /** Custom render function for list item nodes. */
  listItem?: RenderHandler<ListItem>;
  /** Custom render function for mark nodes. */
  mark?: RenderHandler<Mark>;
  /** Custom render function for text nodes. */
  text?: RenderHandler<TextNode, never>;
  /** Custom render function for hard breaks. */
  hardBreak?: RenderHandler<TextNode, never>;
};

/**
 * Context returned by `usePortableText` for rendering and customizing Portable Text components.
 *
 * Provides utility functions for resolving components and a `render` function
 * for fine-grained control over how nested children are rendered.
 */
export interface Context {
  /**
   * Retrieves the default component associated with a Portable Text node.
   *
   * @returns The default component for the node, such as `Block`, `List`, etc.
   *
   * @example
   * ```tsx
   * ---
   * const { getDefaultComponent } = usePortableText(node);
   * const Component = getDefaultComponent();
   * ---
   * <Component {...Astro.props}>
   *    <slot />
   * </Component>
   * ```
   */
  getDefaultComponent: () => Component;
  /**
   * Retrieves the unknown component associated with a Portable Text node.
   *
   * @returns The component used for unknown nodes, such as `unknownBlock` or `unknownList`.
   *
   * @example
   * ```tsx
   * ---
   * const { getUnknownComponent } = usePortableText(node);
   * const Component = getUnknownComponent();
   * ---
   * <Component {...Astro.props}>
   *   <slot />
   * </Component>
   * ```
   */
  getUnknownComponent: () => Component;
  /**
   * Allows for fine-grained control over how nested Portable Text children are rendered.
   *
   * @remarks
   * Added in: `v0.11.0`
   *
   * @param options {@link RenderOptions} - Configuration for customizing node rendering.
   * @returns The desired output for the Portable Text node.
   *
   * @example Basic usage
   * ```tsx
   * ---
   * import { usePortableText } from "astro-portabletext";
   *
   * const { node } = Astro.props;
   * const { getDefaultComponent, render } = usePortableText(node);
   * const Component = getDefaultComponent();
   * ---
   * <Component {...Astro.props}>
   *  {render({
   *    text: ({ props }) => props.node.text.toUpperCase(),
   *    mark: ({ Component, props, children }) => (
   *      <Component {...props} class="custom-mark">{children}</Component>
   *    ),
   *  })}
   * </Component>
   *
   * <style>
   *  .custom-mark {
   *    // some styles
   *  }
   * </style>
   * ```
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render: (options: RenderOptions) => any;
}

/**
 * Generic Portable Text component.
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Component<T extends TypedObject = any> = (props: Props<T>) => any;

/**
 * Defines a component or a mapping of components.
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentOrRecord<T extends TypedObject = any> =
  Component<T> | Record<string, Component<T>>;

/**
 * Defines the type of Portable Text node.
 * @internal
 */
export type NodeType = "type" | "block" | "list" | "listItem" | "mark";
