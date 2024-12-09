const { ensureString } = require('./utils');
const { EMAIL_REGEX } = require('./constants');

/**
 * Checks if a string is a valid email.
 *
 * @function
 * @param {string} input - The string to valiate.
 * @returns {boolean} true if valid, false otherwise.
 *
 * @throws {TypeError} Throws an error if the input is not a string.
 *
 * @example
 * const result = isValidEmail('helloworld@example.com');
 * console.log(result); // true
 */
module.exports = ensureString(input => {
  return EMAIL_REGEX.test(input);
});
