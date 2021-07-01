const patternFormater = require('../patternFormater');
const chai = require('chai');

describe('Should format float numbers with #,##0.00 pattern', () => {

    test('Should format 100,00', () => {
    
    const result = patternFormater.internationalToSimple('#,##0.00', '100,00');

    chai.expect(result).to.equal('100,00');

    });

    test('Should format 1.000,00', () => {
    
        const result = patternFormater.internationalToSimple('#,##0.00', '1.000,00');
    
        chai.expect(result).to.equal('1000,00');
    
    });

    test('Should format 10.000,00', () => {
    
        const result = patternFormater.internationalToSimple('#,##0.00', '10.000,00');
    
        chai.expect(result).to.equal('10000,00');
    
    });

    test('Should format 100.000,00', () => {
    
        const result = patternFormater.internationalToSimple('#,##0.00', '100.000,00');
    
        chai.expect(result).to.equal('100000,00');
    
    });

    test('Should format 1.000.000,00', () => {
    
        const result = patternFormater.internationalToSimple('#,##0.00', '1.000.000,00');
    
        chai.expect(result).to.equal('1000000,00');
    
    });

    test('Should format 1.000,89', () => {
    
        const result = patternFormater.internationalToSimple('#,##0.00', '1.000,89');
    
        chai.expect(result).to.equal('1000,89');
    
    });

    test('Should format 0,30', () => {
    
        const result = patternFormater.internationalToSimple('#,##0.00', '0,30');
    
        chai.expect(result).to.equal('0,30');
    
    });

    test('Should format ,3657', () => {
    
        const result = patternFormater.internationalToSimple('#,##0.00', ',3657');
    
        chai.expect(result).to.equal('0,36');
    
    });

    test('Should format ,3', () => {
    
        const result = patternFormater.internationalToSimple('#,##0.00', ',3');
    
        chai.expect(result).to.equal('0,30');
    
    });

    test('Should format 3,', () => {
    
        const result = patternFormater.internationalToSimple('#,##0.00', '3,');
    
        chai.expect(result).to.equal('3,00');
    
    });

    test('Should format 03,', () => {
    
        const result = patternFormater.internationalToSimple('#,##0.00', '03,');
    
        chai.expect(result).to.equal('03,00');
    
    });

});