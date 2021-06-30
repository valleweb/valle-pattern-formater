const patternFormater = require('./patternFormater');
const chai = require('chai');

describe('Should format float numbers with #,##0.00 pattern', () => {

    test('Should format 100', () => {

        const result = patternFormater.draftToInternational('#,##0.00', '100');

        chai.expect(result).to.equal('100,00');

    });

    test('Should format 1000', () => {

        const result = patternFormater.draftToInternational('#,##0.00', '1000');

        chai.expect(result).to.equal('1.000,00');

    });

    test('Should format 10000', () => {

        const result = patternFormater.draftToInternational('#,##0.00', '10000');

        chai.expect(result).to.equal('10.000,00');

    });

    test('Should format 100000', () => {

        const result = patternFormater.draftToInternational('#,##0.00', '100000');

        chai.expect(result).to.equal('100.000,00');

    });

    test('Should format 1000000', () => {

        const result = patternFormater.draftToInternational('#,##0.00', '1000000');

        chai.expect(result).to.equal('1.000.000,00');

    });

    test('Should format 1000,5', () => {

        const result = patternFormater.draftToInternational('#,##0.00', '1000,5');

        chai.expect(result).to.equal('1.000,50');

    });

    test('Should format 1000,897564', () => {

        const result = patternFormater.draftToInternational('#,##0.00', '1000,897564');

        chai.expect(result).to.equal('1.000,89');

    });

    test('Should format ,3', () => {

        const result = patternFormater.draftToInternational('#,##0.00', ',3');

        chai.expect(result).to.equal('0,30');

    });

    test('Should format ,03', () => {

        const result = patternFormater.draftToInternational('#,##0.00', ',03');

        chai.expect(result).to.equal('0,03');

    });

    test('Should format ,3657', () => {

        const result = patternFormater.draftToInternational('#,##0.00', ',3657');

        chai.expect(result).to.equal('0,36');

    });

    test('Should format 3,', () => {

        const result = patternFormater.draftToInternational('#,##0.00', '3,');

        chai.expect(result).to.equal('3,00');

    });

    test('Should format 03,', () => {

        const result = patternFormater.draftToInternational('#,##0.00', '03,');

        chai.expect(result).to.equal('03,00');

    });

});

describe('Should format float numbers with #,##0.000 pattern', () => {

    test('Should format 100', () => {


        const result = patternFormater.draftToInternational('#,##0.000', '100');

        chai.expect(result).to.equal('100,000');

    });

    test('Should format 1000', () => {


        const result = patternFormater.draftToInternational('#,##0.000', '1000');

        chai.expect(result).to.equal('1.000,000');

    });

    test('Should format 10000', () => {


        const result = patternFormater.draftToInternational('#,##0.000', '10000');

        chai.expect(result).to.equal('10.000,000');

    });

    test('Should format 100000', () => {


        const result = patternFormater.draftToInternational('#,##0.000', '100000');

        chai.expect(result).to.equal('100.000,000');

    });

    test('Should format 1000000', () => {


        const result = patternFormater.draftToInternational('#,##0.000', '1000000');

        chai.expect(result).to.equal('1.000.000,000');

    });


    test('Should format 1000,5', () => {


        const result = patternFormater.draftToInternational('#,##0.000', '1000,5');

        chai.expect(result).to.equal('1.000,500');

    });

    test('Should format 1000,897564', () => {


        const result = patternFormater.draftToInternational('#,##0.000', '1000,897564');

        chai.expect(result).to.equal('1.000,897');

    });

    test('Should format ,3657', () => {
        
        
        const result = patternFormater.draftToInternational('#,##0.000', ',3657');
        
        chai.expect(result).to.equal('0,365');
        
    });

    test('Should format ,3', () => {
        
        
        const result = patternFormater.draftToInternational('#,##0.000', ',3');
        
        chai.expect(result).to.equal('0,300');
        
    });

    test('Should format 3,', () => {
        
        
        const result = patternFormater.draftToInternational('#,##0.000', '3,');
        
        chai.expect(result).to.equal('3,000');

    });
    
    test('Should format 03,', () => {
        
        
        const result = patternFormater.draftToInternational('#,##0.000', '03,');
        
        chai.expect(result).to.equal('03,000');
        
    });

});