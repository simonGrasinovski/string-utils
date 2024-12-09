const { ensureString } = require('./utils');
const { VOWELS_REGEX } = require('./constants');

/**
 * 	Counts the number of vowels in a string.
 *
 * @function
 * @param {string} input - The string to analyze.
 * @returns {number} Count of vowels.
 *
 * @throws {TypeError} Throws an error if the input is not a string.
 *
 * @example
 * const result = countVowels('hello world');
 * console.log(result); // 3
 */
module.exports = ensureString(input => {
  const vowels = input.match(VOWELS_REGEX);
  return vowels ? vowels.length : 0;
});
