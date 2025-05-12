interface WizardBuilderContext {
  component: {
    title: string;
  };
  t: (key: string) => string;
}

export default (
  ctx: WizardBuilderContext
) => `<div class="formio-wizard-builder-component-title">${ctx.t(ctx.component.title)}</div>
`;
