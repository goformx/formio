import { SignatureFormContext } from "../../../types/contexts";

interface Signature {
  form: (context: SignatureFormContext) => string;
}

const signature: Signature = {
  form: (context) => {
    const { component, input, element } = context;
    const width = element?.width || 300;
    const height = element?.height || 200;
    const backgroundColor = element?.backgroundColor || "#ffffff";

    return `
      <div class="signature-pad-container">
        <label for="${input.ref}">${component.label}</label>
        <div class="signature-pad" 
             style="width: ${width}px; height: ${height}px; background-color: ${backgroundColor};">
          <canvas id="${input.ref}" 
                  width="${width}" 
                  height="${height}"
                  style="border: 1px solid #ccc;"></canvas>
        </div>
        <input type="hidden" 
               name="${input.name}" 
               value="${input.value}" 
               ref="${input.ref}" />
        <button type="button" class="btn btn-secondary clear-signature">Clear</button>
      </div>
    `;
  },
};

export default signature;
