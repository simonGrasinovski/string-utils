/**
 * Checks if a string is a valid date.
 *
 * @function
 * @param {string} input - The string to valiate.
 * @returns {boolean} true if valid, false otherwise.
 *
 * @example
 * const result = isValidDate('2024-10-05');
 * console.log(result); // true
 */
module.exports = input => {
  const parsedDate = new Date(input);
  return !isNaN(parsedDate.getTime());
};
