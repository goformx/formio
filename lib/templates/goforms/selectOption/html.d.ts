interface SelectOptionHTMLContext {
  selected?: boolean;
  option: {
    label: string;
  };
  t: (key: string) => string;
}
declare const _default: (ctx: SelectOptionHTMLContext) => string;
export default _default;
