export default (ctx: Record<string, any>) => `<div ref="value">${ if (ctx.value) { }${ctx.self.itemValueForHTMLMode(ctx.value)}${ } else { }-${ } }</div>
`;
