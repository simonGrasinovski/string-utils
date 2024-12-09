const { ensureString } = require('./utils');

/**
 * Extracts a substring between two characters.
 *
 * @function
 * @param {string} input - The string to search.
 * @param {string} startChar - Start character.
 * @param {string} endChar - End character.
 * @returns {string} Exctacted substring.
 *
 * @throws {TypeError} Throws an error if the input is not a string.
 *
 * @example
 * const result = substringBetween('hello world, hello [from] string utils', '[', ']');
 * console.log(result); // 'from'
 */
module.exports = ensureString((input, from, to) => {
  const startIndex = input.indexOf(from);
  const endIndex = input.indexOf(to, startIndex + from.length);
  if (startIndex === -1 || endIndex === -1) return '';
  return input.substring(startIndex + from.length, endIndex);
});
