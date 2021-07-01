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

describe('Should format float numbers with varied patterns pattern', () => {

    test('Should format 200,678', () => {
    
        const result = patternFormater.internationalToSimple('#,##0.000', '200,678');
    
        chai.expect(result).to.equal('200,678');
    
    });

    test('Should format 1.000,000', () => {
    
        const result = patternFormater.internationalToSimple('#,##0.000', '1.000,000');
    
        chai.expect(result).to.equal('1000,000');
    
    });

    test('Should format 1.000,8975', () => {
    
        const result = patternFormater.internationalToSimple('#,##0.0000', '1.000,8975');
    
        chai.expect(result).to.equal('1000,8975');
    
    });

    test('Should format 1.000,50000', () => {
    
        const result = patternFormater.internationalToSimple('#,##0.00000', '1.000,50000');
    
        chai.expect(result).to.equal('1000,50000');
    
    });

    test('Should format 0,365760', () => {
    
        const result = patternFormater.internationalToSimple('#,##0.000000', '0,365760');
    
        chai.expect(result).to.equal('0,365760');
    
    });

    test('Should format 0', () => {
    
        const result = patternFormater.internationalToSimple('#,##0.00', '0');
    
        chai.expect(result).to.equal('0,00');
    
    });

    test('Should format 1.000.000.000,89', () => {
    
        const result = patternFormater.internationalToSimple('#,##0.000000', '1.000.000.000,89');
    
        chai.expect(result).to.equal('1000000000,89');
    
    });

});