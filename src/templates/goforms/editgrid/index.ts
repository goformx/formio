import value from "./form";
import html from "./html";
import type { EditGridContext } from "../../../types/contexts";

interface EditGrid {
  form: (ctx: EditGridContext) => string;
  html: (ctx: EditGridContext) => string;
}

const editgrid: EditGrid = { form: value, html };

export default editgrid;
