interface WellFormContext {
  nestedKey: string;
  children: string;
}

export default (ctx: WellFormContext) => `<div class="ui secondary segment">
  <div class="content" ref="${ctx.nestedKey}">
    ${ctx.children}
  </div>
</div>
`;
