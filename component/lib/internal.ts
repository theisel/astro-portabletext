import type {
  ComponentOrRecord,
  PortableTextComponents,
  SomePortableTextComponents,
  Component,
} from "./types";

/**
 * Helper for component to throw an error
 * @param err
 */
export function throwError(err: Error | string): never {
  throw err;
}

/**
 * Checks whether (it) is a component
 */
export function isComponent(it: ComponentOrRecord): it is Component {
  return typeof it === "function";
}

/**
 * Helper to merge {@link SomePortableTextComponents}
 */
export function mergeComponents(
  components: SomePortableTextComponents,
  overrides: SomePortableTextComponents
): SomePortableTextComponents {
  return (Object.keys(overrides) as Array<keyof PortableTextComponents>).reduce(
    (cmps, key) => {
      const override = overrides[key] as ComponentOrRecord;

      (cmps[key] as ComponentOrRecord) =
        key in cmps
          ? merge(cmps[key] as ComponentOrRecord, override)
          : override;

      return cmps;
    },
    components
  );
}

/**
 * Helper function used by {@link mergeComponents}
 */
function merge(
  parent: ComponentOrRecord,
  override: ComponentOrRecord
): ComponentOrRecord {
  if (isFunction(override) || isFunction(parent)) {
    return override;
  }

  return {
    ...parent,
    ...override,
  };
}

/**
 * Checks (it) is a function
 */
const isFunction = (it: unknown) => typeof it === "function";
