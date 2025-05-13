interface SelectOptionContext {
  selected?: boolean;
  option: {
    value: string;
    label: string;
  };
  attrs?: Record<string, string>;
}
declare const _default: (ctx: SelectOptionContext) => string;
export default _default;
