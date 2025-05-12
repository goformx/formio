export default (
  ctx
) => `<div class="tab-container${ctx.component.verticalLayout ? " card-vertical" : ""}">
  <div class="ui top attached tabular menu${ctx.component.verticalLayout ? " nav-tabs-vertical" : ""}">
    ${ctx.component.components
      .map(
        (tab, index) => `
    <a class="item${ctx.currentTab === index ? " active" : ""}" role="presentation" ref="${ctx.tabLinkKey}">${ctx.t(tab.label)}</a>
    `
      )
      .join("")}
  </div>
  ${ctx.component.components
    .map(
      (tab, index) => `
  <div role="tabpanel" class="ui bottom attached tab segment${ctx.currentTab === index ? " active" : ""}" ref="${ctx.tabKey}"">${ctx.tabComponents[index]}</div>
    `
    )
    .join("")}
</div>
`;
//# sourceMappingURL=form.js.map
