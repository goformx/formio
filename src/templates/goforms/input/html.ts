export default (ctx: Record<string, any>) => `<div ref="value">${ if (ctx.value) { }${ctx.value}${ } else { }-${ } }</div>
`;
