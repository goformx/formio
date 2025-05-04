export default (
  ctx: Record<string, any>,
) => `<div class="formio-wizard-builder-component-title">${ctx.t(ctx.component.title)}</div>
`;
