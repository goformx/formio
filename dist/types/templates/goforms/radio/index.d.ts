import { RadioFormContext, RadioHTMLContext } from "../../../types/contexts";
interface Radio {
  form: (context: RadioFormContext) => string;
  html: (context: RadioHTMLContext) => string;
}
declare const radio: Radio;
export default radio;
