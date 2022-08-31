declare module "*.astro" {
  type Props = any;
  const component: (props: Props) => any;

  export default component;
  export type { Props };
}
