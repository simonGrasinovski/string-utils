const { ensureString } = require('./utils');
const { EMPTY_SPACES_REGEX, CAPITALIZATION_REGEX } = require('./constants');

/**
 * Converts a string to camelCase.
 *
 * @function
 * @param {string} input - The string to convert.
 * @returns {string} String in camelCase.
 *
 * @throws {TypeError} Throws an error if the input is not a string.
 *
 * @example
 * const result = camelCase('Hello World');
 * console.log(result); // 'helloWorld'
 */
module.exports = ensureString(input => {
  return input
    .replace(CAPITALIZATION_REGEX, (match, index) =>
      index === 0 ? match.toLowerCase() : match.toUpperCase()
    )
    .replace(EMPTY_SPACES_REGEX, '');
});
