const patternFormater = require('../../src/patternFormater');
const chai = require('chai');

describe('Should format float numbers with #,##0.00000 pattern', () => {

    test('Should format 100', () => {

        const result = patternFormater.draftToInternational('#,##0.00000', '100');

        chai.expect(result).to.equal('100,00000');

    });

    test('Should format 1000,5', () => {

        const result = patternFormater.draftToInternational('#,##0.00000', '1000,5');

        chai.expect(result).to.equal('1.000,50000');

    });

    test('Should format 1000,897564', () => {

        const result = patternFormater.draftToInternational('#,##0.00000', '1000,897564');

        chai.expect(result).to.equal('1.000,89756');

    });

    test('Should format ,36576456', () => {

        const result = patternFormater.draftToInternational('#,##0.00000', ',36576456');

        chai.expect(result).to.equal('0,36576');

    });

    test('Should format ,3657', () => {

        const result = patternFormater.draftToInternational('#,##0.00000', ',3657');

        chai.expect(result).to.equal('0,36570');

    });

    test('Should format ,3', () => {

        const result = patternFormater.draftToInternational('#,##0.00000', ',3');

        chai.expect(result).to.equal('0,30000');

    });

    test('Should format 3,', () => {

        const result = patternFormater.draftToInternational('#,##0.00000', '3,');

        chai.expect(result).to.equal('3,00000');

    });

    test('Should format 03,', () => {

        const result = patternFormater.draftToInternational('#,##0.00000', '03,');

        chai.expect(result).to.equal('03,00000');

    });

});