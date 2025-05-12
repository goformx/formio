import { PanelContext } from "../../../types/contexts";
import form from "./form";

interface Panel {
  form: (context: PanelContext) => string;
}

const panel: Panel = {
  form,
};

export default panel;
