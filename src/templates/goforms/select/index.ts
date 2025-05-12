import { SelectContext, SelectHTMLContext } from "../../../types/contexts";
import form from "./form";
import html from "./html";

interface Select {
  form: (context: SelectContext) => string;
  html: (context: SelectHTMLContext) => string;
}

const select: Select = {
  form,
  html,
};

export default select;
