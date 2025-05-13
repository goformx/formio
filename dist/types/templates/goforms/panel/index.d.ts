import { PanelContext } from "../../../types/contexts";
interface Panel {
  form: (context: PanelContext) => string;
}
declare const panel: Panel;
export default panel;
