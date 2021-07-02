const patternFormater = require('../../src/patternFormater');
const chai = require('chai');

describe('Should format float numbers with #,##0.0000 pattern', () => {

    test('Should format 100', () => {

        const result = patternFormater.draftToInternational('#,##0.0000', '100,0000');

        chai.expect(result).to.equal('100,0000');

    });

    test('Should format 10000', () => {

        const result = patternFormater.draftToInternational('#,##0.0000', '10.000,0000');

        chai.expect(result).to.equal('10.000,0000');

    });

    test('Should format 1000,5', () => {

        const result = patternFormater.draftToInternational('#,##0.0000', '1000,5');

        chai.expect(result).to.equal('1.000,5000');

    });

    test('Should format 1000,897564', () => {

        const result = patternFormater.draftToInternational('#,##0.0000', '1000,897564');

        chai.expect(result).to.equal('1.000,8975');

    });

    test('Should format ,3', () => {

        const result = patternFormater.draftToInternational('#,##0.0000', ',3');

        chai.expect(result).to.equal('0,3000');

    });

    test('Should format 3,', () => {

        const result = patternFormater.draftToInternational('#,##0.0000', '3,');

        chai.expect(result).to.equal('3,0000');

    });

    test('Should format ,36576456', () => {

        const result = patternFormater.draftToInternational('#,##0.0000', ',36576456');

        chai.expect(result).to.equal('0,3657');

    });

    test('Should format ,3657', () => {

        const result = patternFormater.draftToInternational('#,##0.0000', ',3657');

        chai.expect(result).to.equal('0,3657');

    });

    test('Should format 03,', () => {

        const result = patternFormater.draftToInternational('#,##0.0000', '03,');

        chai.expect(result).to.equal('03,0000');

    });

});