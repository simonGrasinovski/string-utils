const { ensureString } = require('./utils');

/**
 * Counts occurrences of a substring within a string.
 *
 * @function
 * @param {string} input - The string to search.
 * @param {string} substring - The substring to count.
 * @returns {number} Count of occurrences.
 *
 * @throws {TypeError} Throws an error if the input is not a string.
 *
 * @example
 * const result = countOccurrences('hello world, hello from stringUtils', 'hello');
 * console.log(result); // 2
 */
module.exports = ensureString((input, substring) => {
  const result = input.match(new RegExp(substring, 'g'));
  return result ? result.length : 0;
});
