[`astro-portabletext`](https://github.com/theisel/astro-portabletext/blob/main/README.md)

---

# Demonstration

This directory serves as an interactive playground to experiment with `astro-portabletext` and test richly customized content experiences.

## Features

This demo highlights two key methods for customizing Portable Text content:

1. **Custom components:** Override the default rendering of rich text elements (e.g., `blocks`, `lists`, `marks`) by providing custom components through the `components` prop. See the `src/components` directory for examples.
2. **Slot-based customization:** Use Astro's named slot functions for granular control over specific rich text elements. This demo shows how to pass `data-*` attributes (e.g., `data-slot`) within these slots to enable targeted CSS styling.

## Getting started

### Local development

If you have cloned the repository locally:

1. **Prerequisites:**

   - Astro (`>=4.6.0`)
   - Node.js (`>=22.12.0`)

2. **Installation:**

   Install the dependencies from the repository root:

   ```sh
   pnpm install
   ```

3. **Development:**

   From the repository root, start the Astro development server for the demo workspace:

   ```sh
   pnpm launch-demo
   ```

### Cloud environments

If you are running this demo in an isolated cloud environment like [StackBlitz](https://stackblitz.com/) or [CodeSandbox](https://codesandbox.io/), use the provided start script. This will automatically fetch the latest published version of the package and launch the dev server:

```sh
pnpm start
```

## Exploring the demo

The demo page (`src/pages/index.astro`) initially renders Portable Text content with custom components from `src/components`.

To explore slot-based customization:

1. Open `src/pages/index.astro`.
2. Locate the `<PortableText>` component.
3. Uncomment the `<fragment slot="block">` and/or `<fragment slot="list">` sections.
4. Observe the updated rendering in your browser.

The CSS in `src/pages/index.astro` targets elements with the `data-slot` attribute, demonstrating how to apply specific styles predictably without class name conflicts.

## Resources

- [Documentation](https://github.com/theisel/astro-portabletext/blob/main/docs/README.md)
- [Examples](https://github.com/theisel/astro-portabletext/blob/main/examples/README.md)
