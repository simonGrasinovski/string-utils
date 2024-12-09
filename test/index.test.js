const stringUtils = require('../src');

describe('string utilities', () => {
  describe('reverse', () => {
    test('returns the input string reversed', () => {
      const str = 'hello';
      expect(stringUtils.reverse(str)).toBe('olleh');
    });
  });

  describe('countVowels', () => {
    test('returns the correct number of vowels when there are vowels present', () => {
      const str = 'hEllo wOrld';
      expect(stringUtils.countVowels(str)).toBe(3);
    });

    test('returns 0 when there are no vowels in the string', () => {
      const str = 'rhythms';
      expect(stringUtils.countVowels(str)).toBe(0);
    });
  });

  describe('countConsonants', () => {
    test('returns the correct number of consonants when there are consonants present', () => {
      const str = 'Hello wOrLd';
      expect(stringUtils.countConsonants(str)).toBe(7);
    });

    test('returns 0 when there are no consonants in the string', () => {
      const str = 'iou';
      expect(stringUtils.countConsonants(str)).toBe(0);
    });
  });

  describe('uniqueCharacters', () => {
    test('returns all unique characters from the input string', () => {
      const str = 'hello world';
      expect(stringUtils.uniqueCharacters(str)).toBe('helo wrd');
    });

    test('returns unique characters, excluding spaces and ignoring case, when removeSpaces option is enabled', () => {
      const str = 'helLo wOrld';
      expect(
        stringUtils.uniqueCharacters(str, {
          removeSpaces: true,
          caseSensitive: false,
        })
      ).toBe('helowrd');
    });

    test('returns unique characters while respecting case sensitivity when caseSensitive option is enabled', () => {
      const str = 'helLo wOrld';
      expect(stringUtils.uniqueCharacters(str, { caseSensitive: true })).toBe(
        'helLo wOrd'
      );
    });
  });

  describe('camelCase', () => {
    test('should convert a string into camelCase', () => {
      const str = 'helLo world fRom strIng utils';
      expect(stringUtils.camelCase(str)).toBe('helLoWorldFRomStrIngUtils');
    });

    test('handles multiple consecutive spaces correctly', () => {
      const str = 'helLo     world fRom   strIng    utils';
      expect(stringUtils.camelCase(str)).toBe('helLoWorldFRomStrIngUtils');
    });
  });

  describe('titleCase', () => {
    test('should convert a string into Title Case while preserving whitespaces', () => {
      const str = 'helLo   world fRom strIng  utils';
      expect(stringUtils.titleCase(str, { trimConsecutiveSpaces: false })).toBe(
        'Hello   World From String  Utils'
      );
    });

    test('should convert a string into Title Case and trim whitespaces', () => {
      const str = 'helLo   world fRom strIng  utils';
      expect(stringUtils.titleCase(str, { trimConsecutiveSpaces: true })).toBe(
        'Hello World From String Utils'
      );
    });
  });

  describe('snakeCase', () => {
    test('should convert a string into snake_case', () => {
      const str = 'helLo   world fRom   strIng utils';
      expect(stringUtils.snakeCase(str)).toBe('hello_world_from_string_utils');
    });
  });

  describe('kebabCase', () => {
    test('should convert a string into kebab-case', () => {
      const str = 'helLo   world fRom   strIng utils';
      expect(stringUtils.kebabCase(str)).toBe('hello-world-from-string-utils');
    });
  });

  describe('countOccurences', () => {
    test('should return a number greater than 0 if there is atleast 1 match', () => {
      const str = 'hello world, hello from stringUtils';
      expect(stringUtils.countOccurrences(str, 'hello')).toBe(2);
    });
    test('should return 0 if there is a no match', () => {
      const str = 'hello world, hello from stringUtils';
      expect(stringUtils.countOccurrences(str, 'something')).toBe(0);
    });
  });

  describe('exctractNumber', () => {
    test('should return an array of whole numbers', () => {
      const str = 'hello 123 times 98.75 from the 456 world 78.9';
      expect(stringUtils.extractNumber(str, { decimals: false })).toStrictEqual(
        ['123', '456']
      );
    });

    test('should return an array including decimals', () => {
      const str = 'hello 123 times 98.75 from the 456 world 78.9';
      expect(stringUtils.extractNumber(str, { decimals: true })).toStrictEqual([
        '123',
        '98.75',
        '456',
        '78.9',
      ]);
    });

    test('should return null if there is no number', () => {
      const str = 'hello world';
      expect(stringUtils.extractNumber(str)).toBe(null);
    });
  });

  describe('longestWord', () => {
    test('should return the longest word in a string', () => {
      const str = 'this is a multiple word string';
      expect(stringUtils.longestWord(str)).toBe('multiple');
    });
  });

  describe('shortestWord', () => {
    test('should return the shortest word in a string', () => {
      const str = 'this is a multiple word string';
      expect(stringUtils.shortestWord(str)).toBe('a');
    });
  });

  describe('truncate', () => {
    test('should return the truncated string with an ellipsis if no suffix is provided', () => {
      const str = 'this is some very long string string that will be truncated';
      expect(stringUtils.truncate(str, 20)).toBe('this is some very lo...');
    });

    test('should return the truncated string with the provided suffix', () => {
      const str = 'this is some very long string string that will be truncated';
      expect(stringUtils.truncate(str, 10, '!')).toBe('this is so!');
    });
  });

  describe('randomCharacters', () => {
    test('should generate random chars based on the provided length', () => {
      expect(stringUtils.randomCharacters(6)).toHaveLength(6);
    });

    test('should generate only lowercase chars when specified', () => {
      expect(stringUtils.randomCharacters(6)).toMatch(new RegExp('[a-z]'));
    });

    test('should generate only uppercase chars when specified', () => {
      expect(stringUtils.randomCharacters(12, { uppercase: true })).toMatch(
        new RegExp('[A-Z]')
      );
    });

    test('should generate only symbols when specified', () => {
      expect(stringUtils.randomCharacters(15, { symbols: true })).toMatch(
        new RegExp('[!@#$%^&*()\\-_=\\\\|{}\\[\\]:;"\'<>,.?/]')
      );
    });

    test('should generate a non-letter random chars', () => {
      expect(
        stringUtils.randomCharacters(25, { symbols: true, numbers: true })
      ).toMatch(new RegExp('[!@#$%^&*()\\-_=\\\\|{}\\[\\]:;"\'<>,.?/0, 9]'));
    });

    test('should generate letter-only random chars', () => {
      expect(
        stringUtils.randomCharacters(15, {
          uppercase: true,
          lowercase: true,
          symbols: false,
          numbers: false,
        })
      ).toMatch(new RegExp('^[a-zA-Z]+$'));
    });
  });

  describe('substringBetween', () => {
    test('should return a substring between delimiters', () => {
      const str = 'hello world, hello [from] string utils';
      expect(stringUtils.substringBetween(str, '[', ']')).toBe('from');
    });

    test('should return a substing between multiple characters', () => {
      const str = 'hello world, hello abc[from]def string utils';
      expect(stringUtils.substringBetween(str, 'abc', 'def')).toBe('[from]');
    });

    test('should return an empty start if delimiter does not exist', () => {
      const str = 'hello world, hello [from] string utils';
      expect(stringUtils.substringBetween(str, '[', '@')).toBe('');
    });
  });

  describe('removeConsecutiveSpaces', () => {
    test('should remove consecutive spaces from a string', () => {
      const str = 'hello world  from string   utils';
      expect(stringUtils.removeConsecutiveSpaces(str)).toBe(
        'hello world from string utils'
      );
    });

    test('should return the same string if there are no consecutive spaces', () => {
      const str = 'hello world from string utils';
      expect(stringUtils.removeConsecutiveSpaces(str)).toBe(
        'hello world from string utils'
      );
    });
  });

  describe('isValidURL', () => {
    test('should return true if a string is a valid URL', () => {
      const str = 'http://example.com';
      expect(stringUtils.isValidURL(str)).toBe(true);
    });

    test('should return false if a string is not valid URL', () => {
      const str = 'not-a-valid-url';
      expect(stringUtils.isValidURL(str)).toBe(false);
    });
  });

  describe('isValidHex', () => {
    test('should return true if input is a valid hex color', () => {
      const str = '#aeb683';
      expect(stringUtils.isValidHex(str)).toBe(true);
    });
    test('should return false if input is not valid hex color', () => {
      const str = '#aeu683';
      expect(stringUtils.isValidHex(str)).toBe(false);
    });
  });

  describe('isValidDate', () => {
    test('should return true if input is a valid date', () => {
      const result = new Date('2022-05-07');
      expect(stringUtils.isValidDate(result)).toBe(true);
    });
    test('should return true if input is valid date string', () => {
      const result = '2023-02-05';
      expect(stringUtils.isValidDate(result)).toBe(true);
    });
    test('should return false if input is not valid date', () => {
      const result = 'hello world';
      expect(stringUtils.isValidDate(result)).toBe(false);
    });
  });

  describe('isValidEmail', () => {
    test('should return true if input is a valid email', () => {
      const str = 'hello@world.co';
      expect(stringUtils.isValidEmail(str)).toBe(true);
    });
    test('should return false if input is not valid email', () => {
      const str = 'hello@world';
      expect(stringUtils.isValidEmail(str)).toBe(false);
    });
  });
});
