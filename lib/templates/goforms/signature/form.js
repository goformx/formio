export default (ctx) => {
    const component = ctx.component;
    const iconClass = ctx.iconClass;
    const t = ctx.t;
    const required = ctx.required
        ? `<span class="form-control-feedback field-required-inline text-danger">
        <i class="${iconClass("asterisk")}"></i>
      </span>`
        : "";
    const footer = component.footer
        ? `<div class="signature-pad-footer">
        ${t(component.footer)}
      </div>`
        : "";
    return `${ctx.element}
<div
  class="signature-pad-body"
  style="width: ${component.width};height: ${component.height};padding:0;margin:0;"
  tabindex="${component.tabindex || 0}"
  ref="padBody"
>
  <a class="ui basic button mini icon signature-pad-refresh" ref="refresh">
    <i class="${iconClass("refresh")}"></i>
  </a>
  <canvas class="signature-pad-canvas" height="${component.height}" ref="canvas"></canvas>
  ${required}
  <img style="width: 100%;display: none;" ref="signatureImage">
</div>
${footer}`;
};
