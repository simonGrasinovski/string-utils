const { ensureString } = require('./utils');
const { EMPTY_SPACES_REGEX } = require('./constants');

/**
 * Converts a string to kebab-case.
 *
 * @function
 * @param {string} input - The string to convert.
 * @returns {string} String in camelCase.
 *
 * @throws {TypeError} Throws an error if the input is not a string.
 *
 * @example
 * const result = kebabCase('Hello World');
 * console.log(result); // 'hello-world'
 */
module.exports = ensureString(input => {
  return input.toLowerCase().replace(EMPTY_SPACES_REGEX, '-');
});
