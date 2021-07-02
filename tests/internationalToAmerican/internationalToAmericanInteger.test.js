const patternFormater = require('../../src/patternFormater');
const chai = require('chai');

describe('Should format float numbers with ##,#00 pattern', () => {

    test('Should format 100', () => {

        const result = patternFormater.internationalToAmerican('##,#00', '100');

        chai.expect(result).to.equal('100');

    });

    test('Should format 1.000', () => {

        const result = patternFormater.internationalToAmerican('##,#00', '1.000');

        chai.expect(result).to.equal('1000');

    });

    test('Should format 10.000', () => {

        const result = patternFormater.internationalToAmerican('##,#00', '10.000');

        chai.expect(result).to.equal('10000');

    });

    test('Should format 100.000', () => {

        const result = patternFormater.internationalToAmerican('##,#00', '100.000');

        chai.expect(result).to.equal('100000');

    });

    test('Should format 1.000.000', () => {

        const result = patternFormater.internationalToAmerican('##,#00', '1.000.000');

        chai.expect(result).to.equal('1000000');

    });

    test('Should format 1.000.000.000', () => {

        const result = patternFormater.internationalToAmerican('##,#00', '1.000.000.000');

        chai.expect(result).to.equal('1000000000');

    });

    test('Should format 0', () => {

        const result = patternFormater.internationalToAmerican('##,#00', '0');

        chai.expect(result).to.equal('0');

    });

    test('Should format 89.756.465', () => {

        const result = patternFormater.internationalToAmerican('##,#00', '89.756.465');

        chai.expect(result).to.equal('89756465');

    });

});