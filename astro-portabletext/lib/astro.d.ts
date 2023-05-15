/// <reference types="astro/client" />

declare module "*.astro" {
  type Props = any;
  const Component: (props: Props) => any;

  export default Component;
  export type { Props };
}
