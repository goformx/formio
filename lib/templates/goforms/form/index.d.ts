import { FormContext } from '../../../types/contexts';
interface Form {
    form: (context: FormContext) => string;
}
declare const formComponent: Form;
export default formComponent;
