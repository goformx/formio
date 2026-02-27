import iconClass from './iconClass';
import {expect} from 'chai';
describe('iconClass', () => {
    it('should return formio-icon classes for Lucide iconset', () => {
        const classOutput = iconClass('lucide', 'remove', false);
        expect(classOutput).to.equal('formio-icon formio-icon-remove')
    });

    it('should return spinner classes when spinning', () => {
        const classOutput = iconClass('lucide', 'remove', true);
        expect(classOutput).to.equal('formio-icon formio-icon-spinner animate-spin')
    });
});
