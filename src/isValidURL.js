const { ensureString } = require('./utils');

/**
 * Checks if a string is a URL.
 *
 * @function
 * @param {string} input - The string to valiate.
 * @returns {boolean} true if valid, false otherwise.
 *
 * @throws {TypeError} Throws an error if the input is not a string.
 *
 * @example
 * const result = isValidURL('https://www.example.com');
 * console.log(result); // true
 */
module.exports = ensureString(input => {
  try {
    new URL(input);
    return true;
  } catch {
    return false;
  }
});
