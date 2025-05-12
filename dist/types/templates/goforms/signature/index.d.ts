import { SignatureFormContext } from "../../../types/contexts";
interface Signature {
    form: (ctx: SignatureFormContext) => string;
}
declare const signature: Signature;
export default signature;
