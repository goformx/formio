interface SelectContext {
  input: {
    multiple?: boolean;
    attr?: Record<string, string>;
    ref?: string;
  };
  instance: {
    id: string;
  };
  component: {
    key: string;
  };
  options: string;
}
declare const _default: (ctx: SelectContext) => string;
export default _default;
