export default (ctx: Record<string, any>) => `<option ${ctx.selected ? 'selected="selected"' : ''}
  value='${ctx.option.value}'
  ${ for (var attr in ctx.attrs) { }
  ${attr}="${ctx.attrs[attr]}"
  ${ } }
  >
  ${ctx.t(ctx.option.label)}
</option>
`;
