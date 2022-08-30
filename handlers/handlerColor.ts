import { switchCodeColor } from "./switchCodeColor";
/**
 * This function get code from server and return new state
 * @param {Number} code
 * @returns {String}
 */
const handlerColor = (code: number) => {
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

export default handlerColor;
