import type { BuilderEditFormContext } from "../../../types/contexts";
interface BuilderEditForm {
  form: (ctx: BuilderEditFormContext) => string;
}
declare const builderEditForm: BuilderEditForm;
export default builderEditForm;
