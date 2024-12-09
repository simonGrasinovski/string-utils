const { generateCharRange } = require('../utils');

const LOWERCASE_LETTERS = generateCharRange(97, 122);
const UPPERCASE_LETTERS = generateCharRange(65, 90);
const NUMBERS = generateCharRange(48, 57);
const SYMBOLS = generateCharRange(33, 47)
  .concat(generateCharRange(58, 64))
  .concat(generateCharRange(91, 96))
  .concat(generateCharRange(123, 126));

module.exports = {
  LOWERCASE_LETTERS,
  UPPERCASE_LETTERS,
  NUMBERS,
  SYMBOLS,
  EMPTY_SPACES_REGEX: new RegExp('\\s+', 'g'),
  VOWELS_REGEX: new RegExp('[aeiou]', 'gi'),
  CONSONANTS_REGEX: new RegExp('[b-df-hj-np-tv-z]', 'gi'),
  CAPITALIZATION_REGEX: new RegExp('(?:^\\w|[A-Z]|\\b\\w)', 'g'),
  INTEGERS_REGEX: new RegExp('(?<!\\.)\\b\\d+\\b(?!\\.)', 'g'),
  DECIMALS_REGEX: new RegExp('(\\d+(\\.\\d+)?)', 'g'),
  HEX_COLOR_REGEX: new RegExp('^#([0-9A-Fa-f]{3}){1,2}$'),
  EMAIL_REGEX: new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
};
