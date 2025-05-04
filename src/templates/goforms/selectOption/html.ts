export default (ctx: Record<string, any>) => `${ if (ctx.selected) { }${ctx.t(ctx.option.label)}${ } }
`;
