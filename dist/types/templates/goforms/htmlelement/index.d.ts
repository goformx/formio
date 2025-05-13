import { HTMLElementContext } from "../../../types/contexts";
interface HTMLElement {
  form: (context: HTMLElementContext) => string;
}
declare const htmlelement: HTMLElement;
export default htmlelement;
