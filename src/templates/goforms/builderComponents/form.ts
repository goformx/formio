export default (
  ctx: Record<string, any>,
) => `<div class="builder-components drag-container ${ctx.type}" ref="${ctx.key}-container">
  ${ctx.html}
</div>
`;
