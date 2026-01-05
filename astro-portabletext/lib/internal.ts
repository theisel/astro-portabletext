import type {
  Component,
  ComponentOrRecord,
  SomePortableTextComponents,
  TypedObject,
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

/**
 * ========================
 * Node Components Registry
 * ========================
 */

type ResolvedComponents = {
  Default: Component;
  Unknown: Component;
};

const nodeComponentsMap = new WeakMap<TypedObject, ResolvedComponents>();

/**
 * Binds the resolved components to a specific node object.
 * @internal
 *
 * @remarks
 * This uses the node's _object reference_ as the key. This enables the `Context` API via
 * `usePortableText` to look up which components were assigned to this specific node during rendering.
 *
 * @param node - The node object to be used as the key.
 * @param Default - The resolved default component for this node.
 * @param Unknown - The resolved fallback (unknown) component for this node.
 */
export function setNodeComponents(
  node: TypedObject,
  Default: Component,
  Unknown: Component
): void {
  nodeComponentsMap.set(node, { Default, Unknown });
}

/**
 * Retrieves the components bound to a specific node object.
 * @internal
 *
 * @param node - The node object to look up (by reference).
 * @returns The component pair, or `undefined` if this exact node object was not registered.
 */
export function getNodeComponents(
  node: TypedObject
): ResolvedComponents | undefined {
  return nodeComponentsMap.get(node);
}
