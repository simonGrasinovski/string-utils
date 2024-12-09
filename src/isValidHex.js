const { ensureString } = require('./utils');
const { HEX_COLOR_REGEX } = require('./constants');

/**
 * Checks if a string is a valid HEX color.
 *
 * @function
 * @param {string} input - The string to valiate.
 * @returns {boolean} true if valid, false otherwise.
 *
 * @throws {TypeError} Throws an error if the input is not a string.
 *
 * @example
 * const result = isValidHex('#ff5733');
 * console.log(result); // true
 */
module.exports = ensureString(input => {
  return HEX_COLOR_REGEX.test(input);
});
