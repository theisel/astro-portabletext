import type { Component } from "./internal";
import type { MissingComponentHandler } from "./types";

interface Context {
  next: () => Component;
  getWarningMessage: () => string;
  onMissingComponent: (message?: string) => void;
}

export const context = new Map<unknown, Context>();

export const setContext = (key: unknown, value: Context) => {
  context.set(key, value);
};

export const hasContext = context.has.bind(context);

export const getContext = (node: unknown): Context => {
  return context.get(node) ?? ({} as Context);
};
