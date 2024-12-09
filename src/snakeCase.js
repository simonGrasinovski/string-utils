const { ensureString } = require('./utils');
const { EMPTY_SPACES_REGEX } = require('./constants');

/**
 * Converts a string to snake_case.
 *
 * @function
 * @param {string} input - The string to convert.
 * @returns {string} String in snake_case.
 *
 * @throws {TypeError} Throws an error if the input is not a string.
 *
 * @example
 * const result = snakeCase('Hello World');
 * console.log(result); // 'hello_world'
 */
module.exports = ensureString(input => {
  return input.toLowerCase().replace(EMPTY_SPACES_REGEX, '_');
});
