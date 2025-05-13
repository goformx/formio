import { SignatureFormContext } from '../../../types/contexts';
interface Signature {
    form: (context: SignatureFormContext) => string;
}
declare const signature: Signature;
export default signature;
