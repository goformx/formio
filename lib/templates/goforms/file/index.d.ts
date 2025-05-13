import { FileContext } from '../../../types/contexts';
interface File {
    form: (context: FileContext) => string;
    html: (context: FileContext) => string;
}
declare const file: File;
export default file;
