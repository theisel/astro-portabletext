import type {
  Component,
  ComponentOrRecord,
  SomePortableTextComponents,
} from "./types";

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
 * Merges two {@link SomePortableTextComponents} objects, giving priority to overrides.
 *
 * This function combines two component objects used in Portable Text rendering.
 * If both objects have the same key, the value from `overrides` takes precedence.
 * This is useful for customizing the rendering of specific components while keeping
 * the default behavior for others.
 *
 * @typeParam Components - The type of the base components object.
 * @typeParam Overrides - The type of the overrides components object.
 * @typeParam MergedComponents - The type of the resulting merged components object.
 *
 * @param components - The base components object.
 * @param overrides - The overrides components object.
 *
 * @returns A new object with the merged components.
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
