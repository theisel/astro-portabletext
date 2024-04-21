# Changelog

## 1.0.0 (2024-04-21)


### ⚠ BREAKING CHANGES

* **lib:** remove `types` export ([#34](https://github.com/theisel/astro-portabletext/issues/34))
* **usePortabletext:** Removed deprecated and inapt functions
* remove `BlockStyle` and `isBlockStyle`
* deprecate `isBlockStyle`
* redefine `Block` and deprecate `BlockStyle`
* bring in consistent naming
* change `NodeType` type from `enum` to `string`
* `Props` type `N` param should extend `TypedObject`
* remove deprecated types

### Features

* add `class` property to `Props` and deprecate `astroClass` ([ddc12ce](https://github.com/theisel/astro-portabletext/commit/ddc12ceb74e4594e901522829eef1d1e31299a2b))
* add `getWarningMessage` ([81ae628](https://github.com/theisel/astro-portabletext/commit/81ae628f4c2140fa7eee4cb4aec54d415f559bc0))
* add `isBlockStyle` type guard ([74574c4](https://github.com/theisel/astro-portabletext/commit/74574c49685fea933c8ce77b9ee372959002a4ea))
* add `menu` to `list` component types ([c9547e1](https://github.com/theisel/astro-portabletext/commit/c9547e16f8cfb5095f45316d2406e569fdc3d2bc))
* add `onMissingComponent` prop ([46cb0e0](https://github.com/theisel/astro-portabletext/commit/46cb0e09e7d5ff7e060288029a9c3b46cc1c5e88))
* add `onMissingComponent` prop ([02e36c6](https://github.com/theisel/astro-portabletext/commit/02e36c69c7f67329e0ae689e936e1b199f11be75))
* add `TextNode` ([43a49e6](https://github.com/theisel/astro-portabletext/commit/43a49e6cf25a24a1147858da9208aea5ae382cd6))
* add entry declaration file ([e0c35e2](https://github.com/theisel/astro-portabletext/commit/e0c35e236b474d5a56b4ad8f84a541bba6f9f109))
* add new types and deprecate some ([7b83ffe](https://github.com/theisel/astro-portabletext/commit/7b83ffed80234b2be87fb63c8a997a18779a3c05))
* **api:** `usePortableText` ([1c205e7](https://github.com/theisel/astro-portabletext/commit/1c205e7d4ad6000d2fea0536d48cd252a86ac1f4))
* **component:** add `utils` ([1ee90b0](https://github.com/theisel/astro-portabletext/commit/1ee90b05e8f39ace5649f1a2e0f98a15781706b4))
* **component:** export types ([e442699](https://github.com/theisel/astro-portabletext/commit/e44269910eb4bb791e484fd7770967420c3728a1))
* components to throw error ([7c52ca2](https://github.com/theisel/astro-portabletext/commit/7c52ca2ad87c49cd91eeb9c50cc94c439687c5d2))
* **demo:** add `.stackblitzrc` ([c6eb504](https://github.com/theisel/astro-portabletext/commit/c6eb5040f7e2d11adf175711a705693c5062afe8))
* **demo:** add `astro/client` type ([c9b0f12](https://github.com/theisel/astro-portabletext/commit/c9b0f129c46b6eb6fc543a67188f8361a03e2a99))
* **deps:** update `demo` dependencies ([#115](https://github.com/theisel/astro-portabletext/issues/115)) ([0f5c228](https://github.com/theisel/astro-portabletext/commit/0f5c22814dbbe9150288d48046e62a9d5e914453))
* extend functionality of `usePortableText` ([9ba2709](https://github.com/theisel/astro-portabletext/commit/9ba27097809baa952e8a7e593bd0db3c0a80dc4e))
* make `toPlainText` and `mergeComponents` accessible ([1c102cf](https://github.com/theisel/astro-portabletext/commit/1c102cf43d5d7fd92e3e547196d067d38598a46c))
* make primary components accessible ([a6bfa8e](https://github.com/theisel/astro-portabletext/commit/a6bfa8ea59d5d9a4c17b52232473b90940fa417c))
* move types to exports in package.json ([564d953](https://github.com/theisel/astro-portabletext/commit/564d953846b614c7c3963759d52143f7337c8f00))


### Bug Fixes

* [#13](https://github.com/theisel/astro-portabletext/issues/13) `UnknownType` failed during build ([46c62f6](https://github.com/theisel/astro-portabletext/commit/46c62f6b1bb5cafc2d2e8b88eda8a60177163220))
* [#14](https://github.com/theisel/astro-portabletext/issues/14) client-side components are non-reactive ([fb3cdf5](https://github.com/theisel/astro-portabletext/commit/fb3cdf5fe9642437896cd00cb9f826cd89043343))
* [object Generator] error ([8644be2](https://github.com/theisel/astro-portabletext/commit/8644be2073873d6bee49bcad96f0fdfc20829c9e))
* [object Generator] error ([0329730](https://github.com/theisel/astro-portabletext/commit/03297301d8b571d3e073d3aea3e761a44ea262c5))
* `block` and `unknownBlockStyle` prop in `PortableTextComponents` ([2ab187e](https://github.com/theisel/astro-portabletext/commit/2ab187ed2574eb6fc2177112fbb3dbc8a69d31da))
* `components.type` to be an empty object ([ba047c2](https://github.com/theisel/astro-portabletext/commit/ba047c2ea565a784cb36c0fce0105661612b68aa))
* `onMissingComponent` prop to accept boolean ([29815b8](https://github.com/theisel/astro-portabletext/commit/29815b880e39bdd5db66ff8f0206034afc93dbed))
* add `.PHONY` target ([47e47ea](https://github.com/theisel/astro-portabletext/commit/47e47eab5b7910adfd452751a94fc617609969c7))
* add `dist` to ignore in `.eslintrc` ([1c3c4ea](https://github.com/theisel/astro-portabletext/commit/1c3c4ea6c2c9e2d3b10caa965233e1d06ef0bc06))
* add `dom` to `compilerOptions.lib` ([004f71d](https://github.com/theisel/astro-portabletext/commit/004f71d88d06015f2302e6f1d2c852bb3bd298ea))
* add `main` field ([33d07bf](https://github.com/theisel/astro-portabletext/commit/33d07bfdbc33e0223c0a959ecee7e8aeed2d5daa))
* add default `components.listItem.menu` component ([4f194e6](https://github.com/theisel/astro-portabletext/commit/4f194e6e32d4ac4bcf714046955294098b8c9214))
* add LICENSE ([#133](https://github.com/theisel/astro-portabletext/issues/133)) ([a7b026f](https://github.com/theisel/astro-portabletext/commit/a7b026f77c1bec2b309e8f4d5b42579a33193435))
* amend `exports` and add `typesVersions` ([87ff079](https://github.com/theisel/astro-portabletext/commit/87ff079650ffa43465cc5f08b83a3734e93323b8))
* **astro-portabletext:** add `ignoreDeprecations` to tsconfig.json ([b4096ff](https://github.com/theisel/astro-portabletext/commit/b4096ffddd055990d9b8d4004d7528a1ee8b8d73))
* **astro-portabletext:** add `PortableTextBlock` type ([e49f2ab](https://github.com/theisel/astro-portabletext/commit/e49f2ab8fede3aa3f0826919966008c2c77ecde1))
* **astro-portabletext:** fix [#92](https://github.com/theisel/astro-portabletext/issues/92) ([#103](https://github.com/theisel/astro-portabletext/issues/103)) ([9d96e54](https://github.com/theisel/astro-portabletext/commit/9d96e5470e50e17dc5a3b1f40488e00c259a9862))
* **astro-portabletext:** update dependencies and fix [#92](https://github.com/theisel/astro-portabletext/issues/92) ([#100](https://github.com/theisel/astro-portabletext/issues/100)) ([5cbea17](https://github.com/theisel/astro-portabletext/commit/5cbea17371c1e127ab6c16aac3bde931c4deb134))
* build failing ([ab96ddc](https://github.com/theisel/astro-portabletext/commit/ab96ddc8455c6921261ca5d24439226df03094c1))
* cannot redefine property error ([67cdf4c](https://github.com/theisel/astro-portabletext/commit/67cdf4c3546f9aee4e139ab28c50e1671e9dd206))
* change `list` and `listItem` to object ([a353768](https://github.com/theisel/astro-portabletext/commit/a353768a9c1e640ee7e69f039c8fe2a2447713ec))
* change `npm publish` to `changeset publish` ([57c759f](https://github.com/theisel/astro-portabletext/commit/57c759f4c7314193cf685bac76ff56236f0d5c4f))
* change entry file extension ([8ef55a1](https://github.com/theisel/astro-portabletext/commit/8ef55a166ebd65684d08f07cdbd2182bfb5b622a))
* **component:** update path ([4994b2c](https://github.com/theisel/astro-portabletext/commit/4994b2c215a39baf2cda55aea0720d4df4fe2b6f))
* **component:** use new types ([9afa7e3](https://github.com/theisel/astro-portabletext/commit/9afa7e37b2af2119a729410c8954a86c125832ad))
* **demo:** add `is:global` directive to style ([#97](https://github.com/theisel/astro-portabletext/issues/97)) ([1b42231](https://github.com/theisel/astro-portabletext/commit/1b422312a11cad3542be0c520cbcc9ec534ed80e))
* **demo:** amend style ([d326aa4](https://github.com/theisel/astro-portabletext/commit/d326aa4d76d8d94789f74c0170d596a783e5e134))
* **demo:** fix import declaration ([#95](https://github.com/theisel/astro-portabletext/issues/95)) ([e2168b7](https://github.com/theisel/astro-portabletext/commit/e2168b7399d1366c36c2a9d193e04cee694b5f97))
* **demo:** fix PortableText is not defined ([#96](https://github.com/theisel/astro-portabletext/issues/96)) ([6765eae](https://github.com/theisel/astro-portabletext/commit/6765eaec24f7f0fc887bb1075869fafe5464a6f1))
* **demo:** remove inapt prop ([ce34bbb](https://github.com/theisel/astro-portabletext/commit/ce34bbbc5c305c0cc6b21a0076217e8abb0773f9))
* **demo:** startCommand ([a0b8d31](https://github.com/theisel/astro-portabletext/commit/a0b8d31644ffcb990fd3904a4d165c4a503cf732))
* **demo:** update `demo` package ([#93](https://github.com/theisel/astro-portabletext/issues/93)) ([3efa450](https://github.com/theisel/astro-portabletext/commit/3efa450c86681a504765af75910a550fc4dd66d6))
* **demo:** update dependencies ([#105](https://github.com/theisel/astro-portabletext/issues/105)) ([213686c](https://github.com/theisel/astro-portabletext/commit/213686ca3892e9de7dc0de045f7dfaa05f68e7b0))
* **demo:** update dependencies ([#109](https://github.com/theisel/astro-portabletext/issues/109)) ([9042b92](https://github.com/theisel/astro-portabletext/commit/9042b92d0a50e0270cd6b4a08bfb258912eaae4f))
* **demo:** update to new types ([7a9f967](https://github.com/theisel/astro-portabletext/commit/7a9f9674ae44156987bdcd19e83989402074cfd9))
* **demo:** use `getDefaultComponent` ([53b0937](https://github.com/theisel/astro-portabletext/commit/53b09374f4cd8ffadf541df49daa4d8a6dd18353))
* dependency version ([b82101d](https://github.com/theisel/astro-portabletext/commit/b82101dfc450d9e850a98a359779a76e731f2971))
* deprecated types ([eedb253](https://github.com/theisel/astro-portabletext/commit/eedb253623e7a7d4310594fd65f81b822fade08a))
* **deps:** update `astro-portabletext` ([#126](https://github.com/theisel/astro-portabletext/issues/126)) ([8e576a7](https://github.com/theisel/astro-portabletext/commit/8e576a724795dbe613b13851268f1d40ec5a4f0d))
* **deps:** update `astro-portabletext` dependencies ([#131](https://github.com/theisel/astro-portabletext/issues/131)) ([8c9612d](https://github.com/theisel/astro-portabletext/commit/8c9612d872b873b14b640fead9e8f24faa7269b6))
* **deps:** update `astro-portabletext` dependencies ([#67](https://github.com/theisel/astro-portabletext/issues/67)) ([a712143](https://github.com/theisel/astro-portabletext/commit/a712143cb1d84e262ce98a9093b32611b93d87cc))
* **deps:** update `astro-portabletext` dependencies ([#73](https://github.com/theisel/astro-portabletext/issues/73)) ([2fbb149](https://github.com/theisel/astro-portabletext/commit/2fbb14991192f04675cc2543aa7084e35891a188))
* **deps:** update `demo` dependencies ([#112](https://github.com/theisel/astro-portabletext/issues/112)) ([f59d515](https://github.com/theisel/astro-portabletext/commit/f59d51593390d8663db53add94a9c767e2fab937))
* **deps:** update `demo` dependencies ([#118](https://github.com/theisel/astro-portabletext/issues/118)) ([2b7e358](https://github.com/theisel/astro-portabletext/commit/2b7e358996bd64a16663f46b22b43badb4a45bbb))
* **deps:** update `demo` dependencies ([#121](https://github.com/theisel/astro-portabletext/issues/121)) ([1494739](https://github.com/theisel/astro-portabletext/commit/1494739f109cc86ded379daf50b5f06aee517a33))
* **deps:** update `demo` dependencies ([#72](https://github.com/theisel/astro-portabletext/issues/72)) ([c33800e](https://github.com/theisel/astro-portabletext/commit/c33800eb098379ae9766783eee0bda8b8b19f1a0))
* disable formatting for `pre-push` hook ([1fdd014](https://github.com/theisel/astro-portabletext/commit/1fdd0149cf38102005db1a6e7d7bb5bd9f64f83b))
* downgrade `prettier-plugin-astro` ([606e24a](https://github.com/theisel/astro-portabletext/commit/606e24a083f545741c931aa7da95045ee00dc818))
* error thrown in component falls back to `unknown` counterpart ([7809f2f](https://github.com/theisel/astro-portabletext/commit/7809f2fc7acea577414869c101dabf73c1064d0a))
* escape strings ([d39afe6](https://github.com/theisel/astro-portabletext/commit/d39afe6edb14d427e530b8babbe513094e387be7))
* hide component ([4f362ed](https://github.com/theisel/astro-portabletext/commit/4f362eda71ebd45d52de3d7030c24695aef05eb3))
* ignore `demo` ([2a3d9cf](https://github.com/theisel/astro-portabletext/commit/2a3d9cf3cea88d0f2bb89b5b380e49a2afa852a2))
* **lib/types:** interface `Mark` ([#62](https://github.com/theisel/astro-portabletext/issues/62)) ([33df21b](https://github.com/theisel/astro-portabletext/commit/33df21b1fe68fc9489c26c94259d1c7affe87dc7))
* missing export LIST_NEST_MODE_HTML ([dab66b0](https://github.com/theisel/astro-portabletext/commit/dab66b05eb90acf11c95edbb2197cc6fbd21eafa)), closes [#22](https://github.com/theisel/astro-portabletext/issues/22)
* path to types ([4b03123](https://github.com/theisel/astro-portabletext/commit/4b031231badb288b755a47dfaf148b9458937f7b))
* prefix `lib` directory with `/` ([13ed29e](https://github.com/theisel/astro-portabletext/commit/13ed29e627156fcf54d99ada4216585bf3745dba))
* **release:** create new release ([#79](https://github.com/theisel/astro-portabletext/issues/79)) ([216ed54](https://github.com/theisel/astro-portabletext/commit/216ed54468ff10a228eafe6b98350377c96b5032))
* **release:** create new release ([#82](https://github.com/theisel/astro-portabletext/issues/82)) ([8504f8f](https://github.com/theisel/astro-portabletext/commit/8504f8fcd19a77518975acbce1ae4b848f503e59))
* **release:** fix bad release ([#80](https://github.com/theisel/astro-portabletext/issues/80)) ([a50bc83](https://github.com/theisel/astro-portabletext/commit/a50bc8391ae656bb202d72da17d0830e11c3c480))
* remove --dry-run ([94d1c3e](https://github.com/theisel/astro-portabletext/commit/94d1c3e8f0785013eeaee57b0da37b8b1094e444))
* remove `--noEmit` flag ([91d4726](https://github.com/theisel/astro-portabletext/commit/91d4726f262eb7111b49b30e6a4b9f4c871de1d3))
* remove index.ts from include ([5e8ddf9](https://github.com/theisel/astro-portabletext/commit/5e8ddf92ba7d0b35a9b8005d7c3dbe3611abe3e1))
* rename `astroClass` to `class` ([dec16e8](https://github.com/theisel/astro-portabletext/commit/dec16e8cde54c9288fd8485673c711377a6ddae9))
* replace all style imports with js imports to fit new astro syntax ([8448bf7](https://github.com/theisel/astro-portabletext/commit/8448bf713196415bff745a6390cb7a5b22379a6d))
* replace hook with `prepublishOnly` ([7a569bc](https://github.com/theisel/astro-portabletext/commit/7a569bcac7430196f528d57263565d91394b4274))
* replace warning message with slot ([ab19744](https://github.com/theisel/astro-portabletext/commit/ab197442ffb988409c7780e9caf98d78706bbd0e))
* replace with `Fragment` ([5f59d91](https://github.com/theisel/astro-portabletext/commit/5f59d91c1d5c90be8ff4b5cf71ca21d1c78870ff))
* set `normal` as default block `style` ([5949203](https://github.com/theisel/astro-portabletext/commit/59492034824fe1be8202b3e6ac8359957e191fff))
* UnknownBlockStyle css breaking on dev ([0b51036](https://github.com/theisel/astro-portabletext/commit/0b51036ffd5972cb098a0ae3e25dc2dfab841173))
* unwanted whitespace ([7ca752d](https://github.com/theisel/astro-portabletext/commit/7ca752d4c8ca6701c963baf3a8219171bc0623bb))
* update import path ([478f2c5](https://github.com/theisel/astro-portabletext/commit/478f2c5f9a6b2c7823ad55a026ce7c37efd7826f))
* use `markDef` ([fcde082](https://github.com/theisel/astro-portabletext/commit/fcde08288d4118675b1c972f23ace9787e36db50))
* use new type definitions ([233d145](https://github.com/theisel/astro-portabletext/commit/233d1456f7fcbe9e394d3d339038ebc52d57c90d))


### Performance Improvements

* flush context at end of `PortableText` render ([f10099f](https://github.com/theisel/astro-portabletext/commit/f10099f82a8b0214ebff594e3608e8cc38eccab6))
* move style to inline ([cbb4945](https://github.com/theisel/astro-portabletext/commit/cbb4945f62ec8e0a599e7e606c328854f0cd6036))
* remove style ([1d483d6](https://github.com/theisel/astro-portabletext/commit/1d483d6edae9b8ec7d72ffa06442a6bc25b81019))
* use inline css for unknown types/components ([eedfe08](https://github.com/theisel/astro-portabletext/commit/eedfe08f08b038bc3fe53f4d9179275b9627a143))


### Reverts

* "chore: exit prerelease and version packages" ([900d39a](https://github.com/theisel/astro-portabletext/commit/900d39a4e33d822389f85f3bdd5a25d76678cb7d))
* "chore(workflow/npm): change step order ([#76](https://github.com/theisel/astro-portabletext/issues/76))" ([#77](https://github.com/theisel/astro-portabletext/issues/77)) ([9276fe9](https://github.com/theisel/astro-portabletext/commit/9276fe999e896ad7cd04fdd906f28b14c907038d))


### Code Refactoring

* `Props` type `N` param should extend `TypedObject` ([d1b38ea](https://github.com/theisel/astro-portabletext/commit/d1b38ea7b92aeb22353e6b4176fd0153cb4ef366))
* bring in consistent naming ([9753535](https://github.com/theisel/astro-portabletext/commit/9753535e7fdf9cd6e4a4f13bb257f15e4b5cbfdd))
* change `NodeType` type from `enum` to `string` ([11ffafc](https://github.com/theisel/astro-portabletext/commit/11ffafc36cdc241f14bc0a08c4d9e54f86efcd3f))
* deprecate `isBlockStyle` ([c60cc04](https://github.com/theisel/astro-portabletext/commit/c60cc0422c0360fd3e7cb2d169ee8137297328e7))
* **lib:** remove `types` export ([#34](https://github.com/theisel/astro-portabletext/issues/34)) ([f95c9da](https://github.com/theisel/astro-portabletext/commit/f95c9dae1773c49a58132ba344435edaf47e6707))
* redefine `Block` and deprecate `BlockStyle` ([c6cbd3b](https://github.com/theisel/astro-portabletext/commit/c6cbd3b3f8696ec3b43fc805698103fa42620035))
* remove `BlockStyle` and `isBlockStyle` ([cfaaf38](https://github.com/theisel/astro-portabletext/commit/cfaaf3842bf52ac2be8761f8376fb47ec497f195))
* remove deprecated types ([f8b9a06](https://github.com/theisel/astro-portabletext/commit/f8b9a06e2dfbb293589120f427aab99e4a8ce2ca))
* **usePortabletext:** remove inapt functions ([1eb192e](https://github.com/theisel/astro-portabletext/commit/1eb192efa441497d46c0e26e5ee2cd658a87ada8))
