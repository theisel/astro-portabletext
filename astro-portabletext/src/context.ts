import type { Component } from "./internal";

interface Context {
  next: () => Component;
  getWarningMessage: () => string;
  onMissingComponent: (message?: string) => void;
}

const context = new Map<unknown, Context>();

export const setContext = context.set.bind(context);

export const hasContext = context.has.bind(context);

export const getContext = (node: unknown): Context =>
  context.get(node) ?? ({} as Context);

export const flushContext = context.clear.bind(context);
