import type { ArbitraryTypedObject, TypedObject } from "@portabletext/types";
import type { Props, SomePortableTextComponents } from "./types";

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
  }
>(components: Components, overrides: Overrides) {
  const cmps = { ...components } as unknown as Record<
    string,
    ComponentOrRecord
  >;

  for (const [key, override] of Object.entries(overrides)) {
    const current = components[key as keyof Components];

    const value =
      !current || isComponent(override) || isComponent(current)
        ? override
        : {
            ...current,
            ...override,
          };

    (cmps[key] as typeof value) = value;
  }

  return cmps as unknown as MergedComponents;
}

/**
 * Generic Portable Text component
 * @internal
 * @template N Portable Text node type
 */
export type Component<N extends TypedObject = ArbitraryTypedObject> = (
  props: Props<N>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => any;

/**
 * For internal use
 * @internal
 */
export type ComponentOrRecord<N extends TypedObject = ArbitraryTypedObject> =
  | Component<N>
  | Record<string, Component<N>>;
