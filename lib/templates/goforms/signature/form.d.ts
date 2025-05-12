interface SignatureFormContext {
  element: string;
  required?: boolean;
  component: {
    width: string;
    height: number;
    tabindex?: number;
    footer?: string;
  };
  iconClass: (icon: string) => string;
  t: (key: string) => string;
}
declare const _default: (ctx: SignatureFormContext) => string;
export default _default;
