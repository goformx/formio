export default (ctx) => `
  <div class="formio-dialog formio-dialog-theme-default">
    <div class="formio-dialog-content">
      <div class="formio-dialog-content-header">
        <h3 class="lead">${ctx.t(ctx.componentInfo.title)} ${ctx.t("Component")}</h3>
        ${
          ctx.componentInfo.documentation
            ? `
        <a href="${ctx.componentInfo.documentation}" target="_blank">
          <i class="${ctx.iconClass("new-window")}"> ${ctx.t("Help")}</i>
        </a>
        `
            : ""
        }
      </div>
      <div class="formio-dialog-content-body">
        <div class="formio-component-edit-container">
          <div class="formio-component-edit-content">
            <div class="formio-component-edit-content-header">
              <div class="formio-component-edit-content-header-actions">
                <button class="ui button primary" style="margin-right: 10px;" ref="saveButton">${ctx.t("Save")}</button>
                <button class="ui button default" style="margin-right: 10px;" ref="cancelButton">${ctx.t("Cancel")}</button>
                <button class="ui button negative" ref="removeButton">${ctx.t("Remove")}</button>
              </div>
            </div>
            <div class="formio-component-edit-content-body">
              <div class="formio-component-edit-content-body-preview">
                <div class="formio-component-edit-content-body-preview-header">
                  ${ctx.t("Preview")}
                </div>
                <div class="formio-component-edit-content-body-preview-content">
                  <div class="formio-component-edit-content-body-preview-content-help">
                    ${
                      ctx.componentInfo.help
                        ? `
                    <div class="formio-component-edit-content-body-preview-content-help-content">
                      ${ctx.componentInfo.help}
                    </div>
                    `
                        : ""
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="formio-dialog-content-footer">
        <div class="formio-dialog-content-footer-actions">
          <button class="ui button primary" style="margin-right: 10px;" ref="saveButton">${ctx.t("Save")}</button>
          <button class="ui button default" style="margin-right: 10px;" ref="cancelButton">${ctx.t("Cancel")}</button>
          <button class="ui button negative" ref="removeButton">${ctx.t("Remove")}</button>
        </div>
      </div>
    </div>
  </div>
`;
//# sourceMappingURL=form.js.map
