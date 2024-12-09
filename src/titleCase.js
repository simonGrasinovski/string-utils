const removeConsecutiveSpaces = require('./removeConsecutiveSpaces');
const { ensureString } = require('./utils');

/**
 * Converts a string to Title Case.
 *
 * @function
 * @param {string} input - The string to convert.
 * @param {object} [options={}] - An optional configuration object.
 * @param {boolean} [options.trimConsecutiveSpaces=true] -  If true, consecutive spaces are trimmed.
 * @returns {string} String in Title Case.
 *
 * @throws {TypeError} Throws an error if the input is not a string.
 *
 * @example
 * const result = titleCase('helLo   world fRom strIng  utils');
 * console.log(result); // 'Hello World From String Utils'
 */
module.exports = ensureString((input, options = {}) => {
  const { trimConsecutiveSpaces = true } = options;
  if (trimConsecutiveSpaces) {
    input = removeConsecutiveSpaces(input);
  }
  const words = input.toLowerCase().split(' ');
  const result = words.map(word => {
    const firstLetter = word.charAt(0).toUpperCase();
    const remainder = word.slice(1);
    return `${firstLetter}${remainder}`;
  });
  return result.join(' ');
});
