# `astro-portabletext` Demo

This demo shows how to use `astro-portabletext` to create richly customized content experiences in your Astro projects. Feel free to experiment with the code and adapt the techniques demonstrated here to your own needs.

## Features

This demo highlights two key methods for customizing Portable Text content:

1.  **Custom components:** Override the default rendering of Portable Text elements (e.g., `blocks`, `lists`, `marks`, etc.) by providing custom components through the `components` prop of the `PortableText` component. See the `src/components/portabletext` directory for examples.
2.  **Slot-based customization:** Use Astro's named slot functions for granular control over specific Portable Text elements. This demo shows how to pass `data-*` attributes (e.g., `data-slot`) within these slots to enable targeted CSS styling, avoiding class name conflicts.

## Getting Started

1.  **Prerequisites:**
    - Node.js (`>=20.19 <22` or `>=22.12`)
    - Astro (`>=4.6.0`)

2.  **Installation:**

    Install the dependencies using your preferred package manager. For example:

    ```bash
    # npm
    npm install
    ```

3.  **Development:**

    Start the Astro development server:

    ```bash
    # npm
    npm run dev
    ```

    Open your browser and navigate to the URL provided in the terminal (typically `http://localhost:4321`).

## Exploring the Demo

The demo page (`src/pages/index.astro`) initially renders Portable Text content with custom components from `src/components/portabletext`.

To explore slot-based customization:

1.  Open `src/pages/index.astro`.
2.  Locate the `<PortableText>` component.
3.  Uncomment the `<fragment slot="block">` or `<fragment slot="list">` sections.
4.  Observe the updated rendering in your browser.

The CSS in `src/pages/index.astro` targets elements with the `data-slot` attribute, demonstrating how to apply specific styles predictably.

## Why use `data-*` attributes?

While `class` attributes can be passed to custom components, `data-*` attributes offer key advantages:

- **Predictability:**

  Custom components might override or ignore `class` attributes, but `data-*` attributes are reliably passed through to rendered elements.

- **Conflict-free styling:**

  `data-*` attributes provide a dedicated mechanism for targeting specific elements, reducing the risk of conflicts with class names used internally or elsewhere in your application.

## Resources

- **Documentation:** [Full documentation](https://github.com/theisel/astro-portabletext/blob/main/docs/README.md)
- **Examples:** [Browse examples](https://github.com/theisel/astro-portabletext/blob/main/examples/README.md)
