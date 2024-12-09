const { ensureString } = require('./utils');

/**
 * Truncates a string to a specified length, appending a suffix if necessary.
 *
 * @function
 * @param {string} input - The string to truncate.
 * @param {number} length - The maximum length for the truncated string.
 * @param {string} [suffix='...'] - The string to append to the truncated string.
 * @returns {string} Exctacted substring.
 *
 * @throws {TypeError} Throws an error if the input is not a string.
 *
 * @example
 * const result = truncate('this is some very long string string that will be truncated', 20);
 * console.log(result); // 'this is some very lo...'
 */
module.exports = ensureString((input, length, suffix = '...') => {
  return `${input.substring(0, length)}${suffix}`;
});
