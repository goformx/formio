import { NumberContext } from "../../../types/contexts";
import form from "./form";
import html from "./html";

interface Number {
  form: (context: NumberContext) => string;
  html: (context: NumberContext) => string;
}

const number: Number = {
  form,
  html,
};

export default number;
