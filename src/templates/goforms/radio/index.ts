import { RadioFormContext, RadioHTMLContext } from "../../../types/contexts";
import form from "./form";
import html from "./html";

interface Radio {
  form: (context: RadioFormContext) => string;
  html: (context: RadioHTMLContext) => string;
}

const radio: Radio = {
  form,
  html,
};

export default radio;
