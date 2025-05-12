import { ResourceContext } from "../../../types/contexts";

export default (ctx: ResourceContext) => `
  <div class="ui resource input">
    <input
      type="text"
      name="${ctx.input.name}"
      value="${ctx.input.value}"
      ref="${ctx.input.ref}"
      ${ctx.component.resource ? `data-resource="${ctx.component.resource}"` : ""}
      ${ctx.component.template ? `data-template="${ctx.component.template}"` : ""}
      ${ctx.component.searchField ? `data-search-field="${ctx.component.searchField}"` : ""}
      ${ctx.component.searchDebounce ? `data-search-debounce="${ctx.component.searchDebounce}"` : ""}
      ${ctx.component.minSearch ? `data-min-search="${ctx.component.minSearch}"` : ""}
      ${ctx.component.filter ? `data-filter="${ctx.component.filter}"` : ""}
      ${ctx.component.selectFields ? `data-select-fields="${ctx.component.selectFields}"` : ""}
      ${ctx.component.sort ? `data-sort="${ctx.component.sort}"` : ""}
      ${ctx.component.refreshOn ? `data-refresh-on="${ctx.component.refreshOn}"` : ""}
      ${ctx.component.clearOnRefresh ? "data-clear-on-refresh" : ""}
      ${ctx.component.clearOnHide ? "data-clear-on-hide" : ""}
      ${ctx.component.allowCreate ? "data-allow-create" : ""}
      ${ctx.component.allowEdit ? "data-allow-edit" : ""}
      ${ctx.component.allowDelete ? "data-allow-delete" : ""}
      ${
        ctx.input.attr
          ? Object.entries(ctx.input.attr)
              .map(([key, value]) => `${key}="${value}"`)
              .join(" ")
          : ""
      }
    />
  </div>
`;
