import { PasswordContext } from "../../../types/contexts";
import form from "./form";
import html from "./html";

interface Password {
  form: (context: PasswordContext) => string;
  html: (context: PasswordContext) => string;
}

const password: Password = {
  form,
  html,
};

export default password;
