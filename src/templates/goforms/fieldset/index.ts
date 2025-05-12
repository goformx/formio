import { FieldsetContext } from "../../../types/contexts";
import form from "./form";

interface Fieldset {
  form: (context: FieldsetContext) => string;
}

const fieldset: Fieldset = {
  form,
};

export default fieldset;
