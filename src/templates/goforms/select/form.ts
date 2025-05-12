interface SelectContext {
  input: {
    multiple?: boolean;
    attr?: Record<string, string>;
    ref?: string;
  };
  instance: {
    id: string;
  };
  component: {
    key: string;
  };
  options: string;
}

export default (ctx: SelectContext) => `<select
  ref="${ctx.input.ref || "selectContainer"}"
  class="ui search dropdown"
  ${ctx.input.multiple ? "multiple" : ""}
  ${Object.entries(ctx.input.attr || {})
    .map(([attr, value]) => `${attr}="${value}"`)
    .join(" ")}
  ${!ctx.input.attr?.id ? `id="${ctx.instance.id}-${ctx.component.key}"` : ""}
>${ctx.options}</select>
<input type="text"
       class="formio-select-autocomplete-input"
       ref="autocompleteInput"
       ${ctx.input.attr?.autocomplete ? `autocomplete="${ctx.input.attr.autocomplete}"` : ""}
       tabindex="-1"
/>`;
