interface WebformFormContext {
  classes: string;
  children: string;
}

export default (
  ctx: WebformFormContext
) => `<div class="${ctx.classes} ui form" ref="webform" novalidate>${ctx.children}</div>
`;
