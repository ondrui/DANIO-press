const switchCodeColor = require('./switchCodeColor');

const handlerColor = (code) => {
  console.log('code', code);
  if (!code) {
    return `${switchCodeColor[1]}`;
  }
  if (switchCodeColor[code] !== undefined) {
    return `${switchCodeColor[code]}`;
  } else {
    return `${switchCodeColor[1]}`;
  }

};

module.exports = handlerColor;
