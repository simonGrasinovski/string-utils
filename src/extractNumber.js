const { ensureString } = require('./utils');
const { DECIMALS_REGEX, INTEGERS_REGEX } = require('./constants');

/**
 * Extracts numbers (either integers or decimals) from a string.
 *
 * @function
 * @param {string} input - The string to analyze.
 * @param {object} [options={}] - An optional configuration object.
 * @param {boolean} [options.decimals=false] - If true, extracts decimal numbers; if false, extracts only integers.
 * @returns {Array|null} Array of matching numbers, or null if no numbers found.
 *
 * @throws {TypeError} Throws an error if the input is not a string.
 *
 * @example
 * const result = exctractNumber('hello 123 times 98.75 from the 456 world 78.9', { decimals: false });
 * console.log(result); // ['123', '456']
 */
module.exports = ensureString((input, options = {}) => {
  const { decimals = false } = options;
  return input.match(decimals ? DECIMALS_REGEX : INTEGERS_REGEX);
});
