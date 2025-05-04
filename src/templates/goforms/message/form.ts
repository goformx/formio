export default (
  ctx: Record<string, any>,
) => `<div class="ui pointing red basic label ${ctx.level}">
  ${ctx.message}
</div>
`;
