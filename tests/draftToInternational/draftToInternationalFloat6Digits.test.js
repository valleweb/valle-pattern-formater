const patternFormater = require('../../src/patternFormater');
const chai = require('chai');

describe('Should format float numbers with #,##0.000000 pattern', () => {

    test('Should format 100', () => {

        const result = patternFormater.draftToInternational('#,##0.000000', '100');

        chai.expect(result).to.equal('100,000000');

    });

    test('Should format 1000,5', () => {

        const result = patternFormater.draftToInternational('#,##0.000000', '1.000,500000');

        chai.expect(result).to.equal('1.000,500000');

    });

    test('Should format 1000,897564', () => {

        const result = patternFormater.draftToInternational('#,##0.000000', '1000,897564');

        chai.expect(result).to.equal('1.000,897564');

    });

    test('Should format ,36576456', () => {

        const result = patternFormater.draftToInternational('#,##0.000000', ',36576456');

        chai.expect(result).to.equal('0,365764');

    });

    test('Should format ,3657', () => {

        const result = patternFormater.draftToInternational('#,##0.000000', ',3657');

        chai.expect(result).to.equal('0,365700');

    });

    test('Should format ,3', () => {

        const result = patternFormater.draftToInternational('#,##0.000000', ',3');

        chai.expect(result).to.equal('0,300000');

    });

    test('Should format 3,', () => {

        const result = patternFormater.draftToInternational('#,##0.000000', '3,');

        chai.expect(result).to.equal('3,000000');

    });

    test('Should format 03,', () => {

        const result = patternFormater.draftToInternational('#,##0.000000', '03,');

        chai.expect(result).to.equal('03,000000');

    });

});