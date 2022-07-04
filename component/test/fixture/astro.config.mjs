import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "astro-portabletext": fileURLToPath(new URL("../../", import.meta.url)),
      },
    },
  },
});
