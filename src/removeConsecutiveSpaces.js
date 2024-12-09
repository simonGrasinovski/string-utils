const { ensureString } = require('./utils');
const { EMPTY_SPACES_REGEX } = require('./constants');

/**
 * Removes consecutive spaces from a string.
 *
 * @function
 * @param {string} input - The string to process.
 * @returns {string} String with stripped consecutive spaces.
 *
 * @throws {TypeError} Throws an error if the input is not a string.
 *
 * @example
 * const result = removeConsecutiveSpaces('hello world  from string   utils');
 * console.log(result); // 'hello world from string utils'
 */
module.exports = ensureString(input => {
  return input.replace(EMPTY_SPACES_REGEX, ' ');
});
