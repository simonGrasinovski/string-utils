const { ensureString } = require('./utils');
const { CONSONANTS_REGEX } = require('./constants');

/**
 * 	Counts the number of consonants in a string.
 *
 * @function
 * @param {string} input - The string to analyze.
 * @returns {number} Count of consonants.
 *
 * @throws {TypeError} Throws an error if the input is not a string.
 *
 * @example
 * const result = countConsonants('hello world');
 * console.log(result); // 7
 */
module.exports = ensureString(input => {
  const consonants = input.match(CONSONANTS_REGEX);
  return consonants ? consonants.length : 0;
});
