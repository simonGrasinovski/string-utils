const {
  NUMBERS,
  LOWERCASE_LETTERS,
  SYMBOLS,
  UPPERCASE_LETTERS,
} = require('./constants');

/**
 * Generates a random string of a specified length, with optional character sets (lowercase, uppercase, numbers, symbols).
 *
 * @function
 * @param {number} length - The length of the random string.
 * @param {object} [options={}] - Configuration object to specify the character sets.
 * @param {boolean} [options.lowercase=true] - If true, includes lowercase letters.
 * @param {boolean} [options.uppercase=false] - If true, includes uppercase letters.
 * @param {boolean} [options.numbers=false] - If true, includes numbers.
 * @param {boolean} [options.symbols=false] - If true, includes symbols.
 * @returns {string} Generated random string with selected characters.
 *
 * @example
 * const result = randomCharacters(10);
 * console.log(result); // 'a1b2c3d4e5' (example output)
 */
module.exports = (length, options = {}) => {
  const { lowercase, uppercase, numbers, symbols } = options;

  let result = '';
  const characters = [];

  if (lowercase) characters.push(...LOWERCASE_LETTERS);
  if (uppercase) characters.push(...UPPERCASE_LETTERS);
  if (numbers) characters.push(...NUMBERS);
  if (symbols) characters.push(...SYMBOLS);
  if (!characters.length) characters.push(...LOWERCASE_LETTERS);

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};
