# astro-portabletext

[![npm version](https://img.shields.io/npm/v/astro-portabletext.svg?style=flat-square)](https://npmjs.com/package/astro-portabletext)
[![npm downloads](https://img.shields.io/npm/dm/astro-portabletext.svg?style=flat-square)](https://npmjs.com/package/astro-portabletext)
![license](https://img.shields.io/npm/l/astro-portabletext?style=flat-square)

A flexible library for rendering [Portable Text](https://portabletext.org/) content in [Astro](https://astro.build/) projects.

**Prerequisites:**

- Astro (`>=4.6.0`)
- Node.js (`>=22.12.0`)

**Installation:**

```sh
npm install astro-portabletext
```

## Features

- **Core components** for common rich text elements.
- **Custom rendering** using `slots` or your own `components`.
- **Flexible control** with the `render` function via `usePortableText`.
- **Built with** TypeScript support.

## Demonstration

View live examples:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/theisel/astro-portabletext/tree/main/demo)
[![Open in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/theisel/astro-portabletext/tree/main/demo)

## Resources

- [Documentation](docs/README.md)
- [Examples](examples/README.md)

## Sanity

Sanity has forked `astro-portabletext` as [`@portabletext/astro`](https://www.npmjs.com/package/@portabletext/astro), which is maintained under the `@portabletext` organization.

### Continue with `astro-portabletext`

If you're already using `astro-portabletext`, you can continue using it as-is. There is no requirement to migrate.

### Migrate to `@portabletext/astro`

If you would prefer to use the Sanity-maintained fork, see their [migration guide](https://www.npmjs.com/package/@portabletext/astro#migrating-from-astro-portabletext) for instructions.

### Additional Sanity + Astro resources

- [Sanity Integration for Astro](https://www.sanity.io/plugins/sanity-astro)
- [Building a Blog with Sanity and Astro](https://www.sanity.io/guides/sanity-astro-blog)

## Contributing

We welcome contributions to improve `astro-portabletext`!

If you find a bug or have a feature request, please open an [issue](https://github.com/theisel/astro-portabletext/issues).
If you'd like to contribute code, feel free to submit a [pull request](https://github.com/theisel/astro-portabletext/pulls).

## License

[ISC](LICENSE)
