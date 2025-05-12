interface RadioHTMLContext {
  values: Array<{
    label: string;
    value: string;
  }>;
  value: string | Record<string, boolean>;
  t: (key: string) => string;
}
declare const _default: (ctx: RadioHTMLContext) => string;
export default _default;
