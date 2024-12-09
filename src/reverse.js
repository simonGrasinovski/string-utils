const { ensureString } = require('./utils');

/**
 * Reverses the given string.
 *
 * @function
 * @param {string} input - The string to reverse.
 * @returns {string} Reversed string.
 *
 * @throws {TypeError} Throws an error if the input is not a string.
 *
 * @example
 * const result = reverse('hello');
 * console.log(result); // 'olleh'
 */
module.exports = ensureString(input => {
  return Array.from(input).reverse().join('');
});
