import { PhoneNumberContext } from "../../../types/contexts";
import form from "./form";
import html from "./html";

interface PhoneNumber {
  form: (context: PhoneNumberContext) => string;
  html: (context: PhoneNumberContext) => string;
}

const phoneNumber: PhoneNumber = {
  form,
  html,
};

export default phoneNumber;
