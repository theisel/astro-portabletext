/* eslint-disable @typescript-eslint/no-explicit-any */

import type {
  ComponentOrRecord,
  PortableTextComponents,
  PtComponent,
  SomePortableTextComponents,
} from "./types";

/**
 * Checks whether (it) is a component
 */
export function isComponent(it: ComponentOrRecord): it is PtComponent {
  return typeof it === "function";
}

/**
 * Helper to merge {@link PortableTextComponents}
 */
export function mergeComponents(
  components: SomePortableTextComponents,
  overrides: SomePortableTextComponents
): SomePortableTextComponents {
  return (Object.keys(overrides) as Array<keyof PortableTextComponents>).reduce(
    (cmps, key) => {
      (cmps[key] as ComponentOrRecord<any>) =
        key in cmps
          ? merge(
              cmps[key] as ComponentOrRecord,
              overrides[key] as ComponentOrRecord
            )
          : overrides[key];

      return cmps;
    },
    components
  );
}

/**
 * For internal use.
 * Function to merge {@link PortableTextComponents}
 */
function merge(
  parentComponent: ComponentOrRecord,
  overrideComponent: ComponentOrRecord
): ComponentOrRecord {
  if (!overrideComponent) {
    return parentComponent;
  }

  if (isFunction(overrideComponent) || isFunction(parentComponent)) {
    return overrideComponent;
  }

  return {
    ...parentComponent,
    ...overrideComponent,
  };
}

/**
 * For internal use.
 * Function to check (it) is a function
 */
const isFunction = (it: any) => typeof it === "function";
