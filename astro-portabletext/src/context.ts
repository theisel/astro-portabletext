import type { TypedObject } from "@portabletext/types";
import type { Component } from "./internal";
import type { MissingComponentHandler } from "./types";

const context = {
  provideDefaultComponent: (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    node: TypedObject
  ): Component => {
    throw new Error(
      `context.provideDefaultComponent() handler has not been set`
    );
  },
  provideUnknownComponent: function (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    node: TypedObject
  ): Component {
    throw new Error(
      `context.provideUnknownComponent() handler has not been set`
    );
  },
  provideMissingComponentHandler: <MissingComponentHandler>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function (message, ctx): void {
      throw new Error(
        `context.provideMissingComponentHandler() handler has not been set`
      );
    }
  ),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  provideWarningMessage: function (node: TypedObject): string {
    throw new Error(`context.provideWarningMessage() handler has not been set`);
  },
};

export default {
  set provideDefaultComponent(fn: typeof context.provideDefaultComponent) {
    context.provideDefaultComponent = fn;
  },
  set provideUnknownComponent(fn: typeof context.provideUnknownComponent) {
    context.provideUnknownComponent = fn;
  },
  set provideMissingComponentHandler(
    fn: typeof context.provideMissingComponentHandler
  ) {
    context.provideMissingComponentHandler = fn;
  },
  set provideWarningMessage(fn: typeof context.provideWarningMessage) {
    context.provideWarningMessage = fn;
  },
};

export const key = Symbol("astro-portabletext:context");

export function useContext(node: TypedObject) {
  const notifyMissingComponentHandler = (message?: string) => {
    context.provideMissingComponentHandler(
      message ?? context.provideWarningMessage(node),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (node as any)[key]
    );
  };

  return {
    getDefaultComponent: () => context.provideDefaultComponent(node),
    getUnknownComponent: () => context.provideUnknownComponent(node),
    getWarningMessage: () => context.provideWarningMessage(node),
    notifyMissingComponentHandler: notifyMissingComponentHandler,
    /** @deprecated Use `getDefaultComponent` */
    next: () => context.provideDefaultComponent(node),
    /** @deprecated Use `notifyMissingComponentHandler` */
    onMissingComponent: notifyMissingComponentHandler,
  };
}
