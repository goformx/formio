export default (
  ctx: Record<string, any>,
) => `<div class="${ctx.classes} ui form" ref="webform" novalidate>${ctx.children}</div>
`;
