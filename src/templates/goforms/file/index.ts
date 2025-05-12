import { FileContext } from "../../../types/contexts";
import form from "./form";
import html from "./html";

interface File {
  form: (context: FileContext) => string;
  html: (context: FileContext) => string;
}

const file: File = {
  form,
  html,
};

export default file;
