interface SelectHTMLContext {
  value: string | number | null;
  self: {
    itemValueForHTMLMode: (value: string | number) => string;
  };
}
declare const _default: (ctx: SelectHTMLContext) => string;
export default _default;
