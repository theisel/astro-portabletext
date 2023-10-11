import type { Props, SomePortableTextComponents, TypedObject } from "./types";

/**
 * Helper for component to throw an error
 * @param err
 */
export function throwError(err: Error | string): never {
  throw err;
}

/**
 * Returns true if `it` is component
 */
export function isComponent(it: unknown): it is Component {
  return typeof it === "function";
}

/**
 * Helper to merge {@link SomePortableTextComponents}
 */
export function mergeComponents<
  Components extends SomePortableTextComponents,
  Overrides extends SomePortableTextComponents,
  MergedComponents = {
    [Key in keyof (Components & Overrides)]: Key extends keyof (
      | Overrides
      | Components
    )
      ? Overrides[Key] extends Component
        ? Overrides[Key]
        : Components[Key] extends Component
        ? Overrides[Key]
        : (Overrides & Components)[Key]
      : (Overrides & Components)[Key];
  },
>(components: Components, overrides: Overrides) {
  const cmps = { ...components } as Record<string, ComponentOrRecord>;

  for (const [key, override] of Object.entries(overrides)) {
    const current = components[key as keyof typeof components];

    const value =
      !current || isComponent(override) || isComponent(current)
        ? override
        : {
            ...current,
            ...override,
          };

    cmps[key] = value;
  }

  return cmps as MergedComponents;
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
