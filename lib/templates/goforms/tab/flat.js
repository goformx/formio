export default (ctx) => `
  ${ctx.component.components
    .map(
      (tab, index) => `
    <h4 class="ui top attached block header">${ctx.t(tab.label)}</h4>
    <div class="ui bottom attached segment">
      ${ctx.tabComponents[index]}
    </div>
  `
    )
    .join("")}
`;
//# sourceMappingURL=flat.js.map
