export default (
  ctx: Record<string, any>,
) => `<i ref="${ctx.ref}" class="${ctx.className}" style="${ctx.styles}">${ctx.content}</i>
`;
