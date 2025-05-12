import { EditGridContext } from "../../../types/contexts";
import form from "./form";
import html from "./html";

interface EditGrid {
  form: (ctx: EditGridContext) => string;
  html: (ctx: EditGridContext) => string;
}

const editgrid: EditGrid = { form, html };

export default editgrid;
