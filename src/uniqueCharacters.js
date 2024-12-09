const { ensureString, shuffleArray } = require('./utils');
const { EMPTY_SPACES_REGEX } = require('./constants');

/**
 * Returns all unique characters from a string.
 *
 * @function
 * @param {string} input - The string to analyze.
 * @param {object} [options={}] - Configuration object to control additional options.
 * @param {boolean} [options.caseSensitive=true] - Whether to treat characters case-sensitively.
 * @param {boolean} [options.removeSpaces=false] - Whether to remove spaces before processing.
 * @param {boolean} [options.shuffleCharacters=false] - Whether to shuffle the characters in the output string.
 * @returns {string} String with unique characters.
 *
 * @throws {TypeError} Throws an error if the input is not a string.
 *
 * @example
 * const result = uniqueCharacters('hello world');
 * console.log(result); // 'helo wrd'
 */
module.exports = ensureString((input, options = {}) => {
  const {
    caseSensitive = true,
    removeSpaces = false,
    shuffleCharacters = false,
  } = options;
  if (!caseSensitive) {
    input = input.toLowerCase();
  }
  if (removeSpaces) {
    input = input.replace(EMPTY_SPACES_REGEX, '');
  }

  const uniqueArr = Array.from(new Set(input));
  if (shuffleCharacters) {
    shuffleArray(uniqueArr);
  }
  return uniqueArr.join('');
});
