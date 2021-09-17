const draftToInternational = (pattern, data) => {

  if (pattern[0] === 'X') {

    let regex = '';

    for (let index = 1; pattern.indexOf('X') >= 0; ++index) {
      pattern = pattern.replace('X', '$' + index);
      regex += '(\\d)';
    }

    regex += '[^]*';

    return String(data).replace(new RegExp(regex), pattern);

  }

  if (pattern[0] === '#') {

    if (pattern.indexOf('.') === -1) {

      if (pattern.indexOf('.')) {
        data = String(data).split(',')[0];
      }

      if(!data) {
        data = '0';
      }

      return String(data).replace(/(.)(?=(\d{3})+$)/g,'$1.');
    }

    const patternDeciamls = pattern.split('.')[1].length;

    const dataDigits = String(data).split(',');

    let newValue = '';

    if (dataDigits[0]) {
      newValue = String(dataDigits[0]).replace(/(.)(?=(\d{3})+$)/g,'$1.');
    } else {
      newValue = '0';
    }

    if (dataDigits[1]) {

      newValue = newValue + ',' + dataDigits[1].substr(0, patternDeciamls);

      if (dataDigits[1].length < patternDeciamls) {

        const total = patternDeciamls - dataDigits[1].length;

        for (let index = 0; index < total; index++) {
          newValue = newValue + '0';
        }

      }

    } else {
      newValue = newValue + ',' + pattern.split('.')[1];
    }

    return newValue;

  }

};

const internationalToSimple = (pattern, data) => {

  if (pattern.indexOf('.') === -1) {
    return data.replace(/\./g, '');
  }

  let textData = String(data);

  const hasNumbersBeforeComa = textData.split(',')[0].length;

  if (!hasNumbersBeforeComa) {
    textData = '0' + textData;
  }

  const patternDecimalsSize = pattern.split('.')[1].length;

  if (textData.indexOf(',') === -1) {
    textData = textData + ',';
  }

  const dataDecimalsSize = textData.split(',')[1].length;

  if (dataDecimalsSize > patternDecimalsSize) {

    const dataDecimals = textData.split(',')[1];

    const newDecimals = dataDecimals.substr(0, patternDecimalsSize);

    textData = textData.split(',')[0] + ',' + newDecimals;

  }

  if (dataDecimalsSize < patternDecimalsSize) {

    const missingDecimal = patternDecimalsSize - dataDecimalsSize;

    for (let index = 0; index < missingDecimal; index++) {
      textData = textData + '0';
    }

  }

  return textData.replace(/\./g, '');

};

const internationalToAmerican = (pattern, data) => {

  if (pattern.indexOf('.') === -1) {
    return data.replace(/\./g, '');
  }

  if (pattern[0] === '#' && data) {

    let textData = String(data);

    const hasNumbersBeforeComa = textData.split(',')[0].length;

    if (!hasNumbersBeforeComa) {
      textData = '0' + textData;
    }

    const patternDecimalsSize = pattern.split('.')[1].length;

    if (textData.indexOf(',') === -1) {
      textData = textData + ',';
    }

    const dataDecimalsSize = textData.split(',')[1].length;

    if (dataDecimalsSize > patternDecimalsSize) {

      const dataDecimals = textData.split(',')[1];

      const newDecimals = dataDecimals.substr(0, patternDecimalsSize);

      textData = textData.split(',')[0] + ',' + newDecimals;

    }

    if (dataDecimalsSize < patternDecimalsSize) {

      const missingDecimal = patternDecimalsSize - dataDecimalsSize;

      for (let index = 0; index < missingDecimal; index++) {
        textData = textData + '0';
      }

    }

    return textData.replace(/\./g, '').replace(/,/g, '.');

  }

  return data;

};

const americanToInternational = () => {

};

module.exports = {
  draftToInternational,
  internationalToSimple,
  internationalToAmerican,
  americanToInternational,
};
