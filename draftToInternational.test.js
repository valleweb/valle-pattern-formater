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

})