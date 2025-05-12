interface RadioFormContext {
  inline?: boolean;
  values: Array<{
    label: string;
    value: string;
    selected?: boolean;
  }>;
  input: {
    type: string;
    attr: {
      type?: string;
    };
  };
}
declare const _default: (ctx: RadioFormContext) => string;
export default _default;
