[astro-portabletext](README.md) / sanity

# Sanity

For [Sanity](https://sanity.io) projects have a look at the following comprehensive resources:

- [The Official Sanity integration for Astro](https://www.sanity.io/plugins/sanity-astro)
- [Build your blog with Astro and Sanity](https://www.sanity.io/guides/sanity-astro-blog)

&nbsp;

Alternatively, have a look at the following quick guide:

&nbsp;

## Setup

### Client

```ts
/* lib/sanity/client.ts */
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: /* required */,
  dataset:  /* required */,
  apiVersion:  /* required */,
  useCdn:  /* optional */,
});
```

### Image Builder

```ts
/* lib/sanity/image.ts */
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

type ImageUrlBuilder = ReturnType<typeof imageUrlBuilder>;

export type ImageSource = Parameters<ImageUrlBuilder["image"]>[0];

export const imageUrlFor = (source: ImageSource) =>
  imageUrlBuilder(sanityClient).image(source);
```

### Export

```ts
/* lib/sanity/index.ts */
export { sanityClient } from "./client";
export { imageUrlFor, type ImageSource } from "./image";
```

&nbsp;

## Components

Refer to [Hydration](./hydration.md) page as well.

### Image

A generic image component intended for use across the app and has no concern about layout.

```ts
---
/* @/components/Image.astro */
import { imageUrlFor, type ImageSource } from "@/lib/sanity";

export interface Props {
  asset: ImageSource;
  alt?: string | null | undefined;
  class?: astroHTML.JSX.HTMLAttributes['class'];
}

const { asset, ...rest } = Astro.props;
const image = imageUrlFor(asset);
---

<img src={image} {...rest} />

<style>
  img {
    /* Maybe some basic styling? */
  }
</style>
```

### PortableText Image

A Portable Text image component to handle the incoming node and deal with the layout utilising the `isInline` prop and passing the node to the [generic image](#image) component

```ts
---
/* @/portabletext/Image.astro */
import type { Props as $, TypedObject } from "astro-portabletext/types";
import Image, {type Props as ImageProps} from "@/components/Image.astro";

export type Props = $<ImageProps & TypedObject>;

const { node, isInline } = Astro.props;
---

{isInline ? (
  <Image class="rounded" {...node} />
) : (
  <div class="impact">
    <Image {...node} />
  </div>
)}

<style>
  .rounded {
    /* some styles */
  }
  .impact {
    /* some styles */
  }
</style>
```

&nbsp;

## Usage

```ts
---
import { PortableText } from "astro-portabletext";
// import `portabletext` component
import Image from "@/portabletext/Image.astro";

const value = {/* provide value */};

const components = {
  type: {
    image: Image
  }
};
---

<PortableText value={value} components={components} />
```
