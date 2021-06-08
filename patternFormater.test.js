const patternFormater = require('./patternFormater');
const chai = require('chai');

test('Should format a CPF pattern', () => {

    const result = patternFormater('XXX.XXX.XXX-XX', '09843476490');

    chai.expect(result).to.equal('098.434.764-90');

});