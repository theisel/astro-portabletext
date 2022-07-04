/* eslint-disable @typescript-eslint/no-explicit-any */

import type {
  ToolkitListNestMode,
  ToolkitPortableTextList,
} from "@portabletext/toolkit";

import type {
  ArbitraryTypedObject,
  PortableTextBlock,
  PortableTextBlockStyle,
  PortableTextListItemBlock,
  PortableTextListItemType,
  TypedObject,
} from "@portabletext/types";

export type { TypedObject } from "@portabletext/types";

/**
 * Properties for the Astro Portable Text component
 *
 * @template PtNode Portable Text node
 */
export interface PortableTextProps<
  PtNode extends TypedObject = PortableTextBlock | ArbitraryTypedObject
> {
  /**
   * Portable Text blocks
   */
  value: PtNode | PtNode[];

  /**
   * Components for rendering
   */
  components: PortableTextComponents;

  /**
   * A 'nice to have', default is 'html'
   * Refer to {@link https://portabletext.github.io/toolkit/modules.html#ToolkitListNestMode}
   */
  listNestingMode?: ToolkitListNestMode;
}

/**
 * Object defining how Portable Text types should be rendered
 */
export type PortableTextComponents = {
  /**
   * {Astro, Svelte, JSX} component to handle user-defined type
   */
  type: ComponentOrRecord<PtTypeComponent>;
  /**
   * {Astro, Svelte, JSX} component to handle unknown user-defined type
   */
  unknownType: PtTypeComponent;
  /**
   * {Astro, Svelte, JSX} component to handle (_type == 'block')
   */
  block: ComponentOrRecord<PtBlockComponent, PortableTextBlockStyle>;
  /**
   * {Astro, Svelte, JSX} component to handle unknown (_type == 'block') style
   */
  unknownBlockStyle: PtBlockComponent;
  /**
   * {Astro, Svelte, JSX} component to handle (_type == 'list')
   */
  list: ComponentOrRecord<PtListComponent, PortableTextListItemType>;
  /**
   * {Astro, Svelte, JSX} component to handle unknown (_type == 'list')
   */
  unknownList: PtListComponent;
  /**
   * {Astro, Svelte, JSX} component to handle (_type == 'listItem')
   */
  listItem: ComponentOrRecord<PtListItemComponent, PortableTextListItemType>;
  /**
   * {Astro, Svelte, JSX} component to handle unknown (_type == 'listItem')
   */
  unknownListItem: PtListItemComponent;
  /**
   * {Astro, Svelte, JSX} component to handle mark
   */
  mark: ComponentOrRecord<PtMarkComponent>;
  /**
   * {Astro, Svelte, JSX} component to handle unknown mark
   */
  unknownMark: PtMarkComponent;
  /**
   * {Astro, Svelte, JSX} component to handle breaks
   */
  hardBreak: PtComponent;
};

/**
 * Object defining how some Portable Text types should be rendered
 */
export type SomePortableTextComponents = Partial<PortableTextComponents>;

/**
 * Properties for generic Portable Text {Astro, Svelte, JSX} component
 *
 * @template PtNode Type of Portable Text data this component will receive in its `node` property
 */
export interface PtComponentProps<
  PtNode extends TypedObject = PortableTextBlock | ArbitraryTypedObject
> {
  /**
   * Portable Text block
   */
  node: PtNode;

  /**
   * Index within its parent
   */
  index: number;

  /**
   * Whether the component should be layed out as inline or block element
   */
  isInline: boolean;

  /**
   * Set when <style> is used within an Astro component, should be used when defined.
   */
  astroClass: string | undefined;
}

/**
 * Generic Portable Text {Astro, Svelte, JSX, etc.} component
 */
export type PtComponent<Props extends PtComponentProps = PtComponentProps> = (
  props: Props
) => any;

/**
 * Intended for internal use
 */
export type ComponentOrRecord<
  Cmp extends PtComponent<any> = PtComponent,
  Key extends string = string
> = Cmp | Record<Key, Cmp>;

/**
 * Props for {@link PtBlockComponent}
 */
export type PtBlockComponentProps = PtComponentProps<PortableTextBlock>;

/**
 * Block Component
 */
export type PtBlockComponent = PtComponent<PtBlockComponentProps>;

/**
 * Props for {@link PtListComponent}
 */
export type PtListComponentProps = PtComponentProps<ToolkitPortableTextList>;

/**
 * List Component
 */
export type PtListComponent = PtComponent<PtListComponentProps>;

/**
 * Props for {@link PtListItemComponent}
 */
export type PtListItemComponentProps =
  PtComponentProps<PortableTextListItemBlock>;

/**
 * List Item Component
 */
export type PtListItemComponent = PtComponent<PtListItemComponentProps>;

export interface PortableTextMark extends TypedObject {
  markType: string;
}

/**
 * Props for {@link PtMarkComponent}
 */
export type PtMarkComponentProps = PtComponentProps<PortableTextMark>;

/**
 * Mark Component
 */
export type PtMarkComponent = PtComponent<PtMarkComponentProps>;

/**
 * Props for {@link PtTypeComponent}
 *
 * @template PtNode Portable Text node (_type: user-defined)
 */
export type PtTypeComponentProps<
  PtNode extends TypedObject = ArbitraryTypedObject
> = PtComponentProps<PtNode>;

/**
 * User-defined _type component
 */
export type PtTypeComponent = PtComponent<PtTypeComponentProps>;

/**
 * Props for Portable Text node renderer
 */
export interface NodeRendererProps {
  component: PtComponent;
  [key: string]: any;
}
