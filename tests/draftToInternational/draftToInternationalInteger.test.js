const patternFormater = require('../../src/patternFormater');
const chai = require('chai');

describe('Should format integer numbers with ##,#00 pattern', () => {

    test('Should format 100', () => {

        const result = patternFormater.draftToInternational('##,#00', '100');

        chai.expect(result).to.equal('100');

    });

    test('Should format 1000', () => {

        const result = patternFormater.draftToInternational('##,#00', '1000');

        chai.expect(result).to.equal('1.000');

    });

    test('Should format 10000', () => {

        const result = patternFormater.draftToInternational('##,#00', '10000');

        chai.expect(result).to.equal('10.000');

    });

    test('Should format 100000', () => {

        const result = patternFormater.draftToInternational('##,#00', '100000');

        chai.expect(result).to.equal('100.000');

    });

    test('Should format 1000000', () => {

        const result = patternFormater.draftToInternational('##,#00', '1000000');

        chai.expect(result).to.equal('1.000.000');

    });

    test('Should format 1000000000', () => {

        const result = patternFormater.draftToInternational('##,#00', '1000000000');

        chai.expect(result).to.equal('1.000.000.000');

    });

    test('Should format 1000,5', () => {

        const result = patternFormater.draftToInternational('##,#00', '1000,5');

        chai.expect(result).to.equal('1.000');

    });

    test('Should format 1000,897564', () => {

        const result = patternFormater.draftToInternational('##,#00', '1000,897564');

        chai.expect(result).to.equal('1.000');

    });

    test('Should format ,3', () => {

        const result = patternFormater.draftToInternational('##,#00', ',3');

        chai.expect(result).to.equal('0');

    });

    test('Should format ,3657', () => {

        const result = patternFormater.draftToInternational('##,#00', ',3657');

        chai.expect(result).to.equal('0');

    });

    test('Should format 89756465', () => {

        const result = patternFormater.draftToInternational('##,#00', '89756465');

        chai.expect(result).to.equal('89.756.465');

    });

});