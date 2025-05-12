import value from "./form";
import type { BuilderEditFormContext } from "../../../types/contexts";

interface BuilderEditForm {
  form: (ctx: BuilderEditFormContext) => string;
}

const builderEditForm: BuilderEditForm = { form: value };

export default builderEditForm;
