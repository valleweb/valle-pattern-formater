const patternFormater = require('./patternFormater');
const chai = require('chai');

test('Should format a CPF pattern', () => {

    const result = patternFormater('XXX.XXX.XXX-XX', '09843476490');

    chai.expect(result).to.equal('098.434.764-90');

});

test('Should format a CNPJ pattern', () => {

    const result = patternFormater('XX.XXX.XXX/XXXX-XX', '29701763000141');

    chai.expect(result).to.equal('29.701.763/0001-41');

});

test('Should format a CEP pattern', () => {

    const result = patternFormater('XXXXX-XXX', '74986290');

    chai.expect(result).to.equal('74986-290');

});

test('Should format a short date pattern', () => {

    const result = patternFormater('XX/XX/XX', '031192');

    chai.expect(result).to.equal('03/11/92');

});

test('Should format a complete date pattern', () => {

    const result = patternFormater('XX/XX/XXXX', '03111992');

    chai.expect(result).to.equal('03/11/1992');

});

test('Should format a financial count pattern', () => {

    const result = patternFormater('XX.XXX', '28167');

    chai.expect(result).to.equal('28.167');

});

test('Should format a financial cost center pattern', () => {

    const result = patternFormater('XX.XXXXX', '2816733');

    chai.expect(result).to.equal('28.16733');

});

test('Should format a BR phone number pattern', () => {

    const resultWith9 = patternFormater('+XX XX OXXXX-XXXX', '5511912345678');
    const resultWithout9 = patternFormater('+XX XX OXXXX-XXXX', '551112345678');

    chai.expect(resultWith9).to.equal('+55 11 91234-5678');
    chai.expect(resultWithout9).to.equal('+55 11 1234-5678');

});

test('Should format a RG pattern', () => {

    const result = patternFormater('XX.XXX.XXX-X', '472383358');

    chai.expect(result).to.equal('47.238.335-8');

});