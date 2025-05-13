import { FieldsetContext } from '../../../types/contexts';
interface Fieldset {
    form: (context: FieldsetContext) => string;
}
declare const fieldset: Fieldset;
export default fieldset;
