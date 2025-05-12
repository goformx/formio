import { HTMLElementContext } from "../../../types/contexts";
import form from "./form";

interface HTMLElement {
  form: (context: HTMLElementContext) => string;
}

const htmlelement: HTMLElement = {
  form,
};

export default htmlelement;
