const { ensureString } = require('./utils');
const { EMPTY_SPACES_REGEX } = require('./constants');

/**
 * Finds the longest word in a string.
 *
 * @function
 * @param {string} input - The string to analyze.
 * @returns {string} Longest word found.
 *
 * @throws {TypeError} Throws an error if the input is not a string.
 *
 * @example
 * const result = longestWord('this is a multiple word string');
 * console.log(result); // 'multiple'
 */
module.exports = ensureString(input => {
  const words = input.trim().split(EMPTY_SPACES_REGEX);
  return words.reduce((acc, curr) => {
    return curr.length > acc.length ? curr : acc;
  }, '');
});
