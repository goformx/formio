import { FormContext } from "../../../types/contexts";
import form from "./form";

interface Form {
  form: (context: FormContext) => string;
}

const formComponent: Form = {
  form,
};

export default formComponent;
