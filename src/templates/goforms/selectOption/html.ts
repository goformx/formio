interface SelectOptionHTMLContext {
  selected?: boolean;
  option: {
    label: string;
  };
  t: (key: string) => string;
}

export default (ctx: SelectOptionHTMLContext) => `
  ${ctx.selected ? ctx.t(ctx.option.label) : ""}
`;
