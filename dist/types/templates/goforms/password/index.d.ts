import { PasswordContext } from "../../../types/contexts";
interface Password {
    form: (context: PasswordContext) => string;
    html: (context: PasswordContext) => string;
}
declare const password: Password;
export default password;
