import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "astro-portabletext": resolve(
        import.meta.dirname,
        "../astro-portabletext/"
      ),
      "@": resolve(import.meta.dirname, "./src/"),
    },
  },
});
