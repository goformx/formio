interface WebformContext {
  component: {
    title: string;
  };
  t: (key: string) => string;
}

export default (
  ctx: WebformContext
) => `<div class="ui visible message"><p>${ctx.t(ctx.component.title)}</p></div>
`;
