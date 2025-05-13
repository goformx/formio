import { PhoneNumberContext } from "../../../types/contexts";
interface PhoneNumber {
    form: (context: PhoneNumberContext) => string;
    html: (context: PhoneNumberContext) => string;
}
declare const phoneNumber: PhoneNumber;
export default phoneNumber;
