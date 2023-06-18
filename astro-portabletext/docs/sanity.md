[**`astro-portabletext`**](../README.md) > [**`docs`**](README.md)

# Sanity

For [Sanity](https://sanity.io) projects have a look at [sanity-template-astro-clean](https://github.com/sanity-io/sanity-template-astro-clean) Github repo.

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
type ImageSource = ImageUrlBuilder["image"];

export const imageUrlFor = (source: ImageSource) =>
  imageUrlBuilder(sanityClient).image(source);

```

### Export

```ts
/* lib/sanity/index.ts */
export { sanityClient } from "./client";
export { imageUrlFor } from "./image";
```

&nbsp;

## Components

Refer to [Hydration](./hydration.md) page as well.

### Image

```ts
---
/* @/components/Image.astro */
import { imageUrlFor } from "@/lib/sanity";

type Asset = Parameters<typeof imageUrlFor>[0];

export interface Props {
  asset: Asset;
  alt: string;
}

const { asset, alt } = Astro.props;
const image = imageUrlFor(asset);
---

<img src={image} alt={alt} />
```

### PortableText Image

```ts
---
/* @/portabletext/Image.astro */
import type { Props as $, TypedObject } from "astro-portabletext/types";
import Image from "@/components/Image.astro";

type ImageProps = Parameters<typeof Image>[0];

export type Props = $<ImageProps & TypedObject>;

const { node /*, isInline, class: cls */ } = Astro.props;

// Do stuff with `isInline` and `class`
---

<Image {...node} />
```

&nbsp;

## Usage

```ts
---
import { PortableText } from "astro-portabletext";
// import `portabletext` component
import Image from "@/portabletext/Image.astro"; 

const value = {/* fetch payload */};

const components = {
  type: {
    image: Image
  }
};
---

<PortableText value={value} components={components} />
```