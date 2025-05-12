interface BuilderSidebarContext {
  t: (key: string) => string;
  groups: string[];
}

export default (ctx: BuilderSidebarContext) => `
  <div class="formio-builder-sidebar">
    ${ctx.groups.map((group: string) => `${group}`).join("")}
  </div>
`;
