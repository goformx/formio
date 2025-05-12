interface WizardFormContext {
  className: string;
  wizardHeaderType: string;
  content: string;
}

export default (ctx: WizardFormContext) => `<div class="${ctx.className}">
  <div style="position: relative;">
    ${
      ctx.wizardHeaderType === "wizardHeaderVertical"
        ? `<div class="ui stackable grid">
            <div class="three wide computer sixteen wide tablet sixteen wide mobile column">
              <div class="ui vertical steps">
                ${ctx.content}
              </div>
            </div>
            <div class="thirteen wide computer sixteen wide tablet sixteen wide mobile column">
              <div class="ui segment">
                <div class="ui form">
                  ${ctx.content}
                </div>
              </div>
            </div>
          </div>`
        : `<div class="ui segment">
            <div class="ui form">
              ${ctx.content}
            </div>
          </div>`
    }
  </div>
</div>`;
