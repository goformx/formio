import { SelectBoxesContext } from "../../../types/contexts";
import form from "./form";
import html from "./html";

interface SelectBoxes {
  form: (context: SelectBoxesContext) => string;
  html: (context: SelectBoxesContext) => string;
}

const selectboxes: SelectBoxes = {
  form,
  html,
};

export default selectboxes;
