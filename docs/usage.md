# Usage

## Importing the Library

You can import the library in your JavaScript files as follows:

```javascript
const stringUtils = require('string-utils');
// or, if you're using ES Modules
import * as stringUtils from 'string-utils';
```

## Available Functions

### 1. Reverse a String

```javascript
const result = stringUtils.reverse('hello');
// Output: "olleh"
```

### 2. Count Vowels in a String

```javascript
const count = stringUtils.countVowels('hello world');
// Output: 3
```

### 3. Count Consonants in a String

```javascript
const count = stringUtils.countConsonants('hello world');
// Output: 7
```

### 4. Get Unique Characters in a String

```javascript
const uniqueChars = stringUtils.uniqueCharacters('hello');
// Output: "helo"
```

### 5. Convert to camelCase

```javascript
const result = stringUtils.camelCase('hello world');
// Output: "helloWorld"
```

### 6. Convert to Title Case

```javascript
const result = stringUtils.titleCase('hello world');
// Output: "Hello World"
```

### 7. Convert to snake_case

```javascript
const result = stringUtils.snakeCase('hello world');
// Output: "hello_world"
```

### 8. Convert to kebab-case

```javascript
const result = stringUtils.kebabCase('hello world');
// Output: "hello-world"
```

### 9. Count Occurrences of a Substring

```javascript
const count = stringUtils.countOccurrences('hello world', 'o');
// Output: 2
```

### 10. Extract Number from a String

```javascript
const number = stringUtils.extractNumber('There are 2 apples and 54 bananas');
// Output: [2, 54]
```

### 11. Find the Longest Word

```javascript
const longest = stringUtils.longestWord('hello world from string utils');
// Output: "string"
```

### 12. Find the Shortest Word

```javascript
const shortest = stringUtils.shortestWord('hello world from string utils');
// Output: "from"
```

### 13. Truncate a String

```javascript
const result = stringUtils.truncate('hello world', 5, '...');
// Output: "hello..."
```

### 14. Generate random characters

```javascript
const randomStr = stringUtils.randomCharacters(10);
// Output: "a1b2c3d4e5" (example output)
```

### 15. Substring Between Two Characters

```javascript
const substring = stringUtils.substringBetween('hello [world]', '[', ']');
// Output: "world"
```

### 16. Remove Consecutive Spaces from a String

```javascript
const result = stringUtils.removeDuplicates(
  'hello   world from     string utils'
);
// Output: "hello world from string utils"
```

### 17. Validate URL

```javascript
const isValid = stringUtils.isValidURL('https://www.example.com');
// Output: true
```

### 18. Validate HEX Color

```javascript
const isValid = stringUtils.isValidHex('#ff5733');
// Output: true
```

### 19. Validate Date

```javascript
const isValid = stringUtils.isValidDate('2024-10-05');
// Output: true
```

### 20. Validate Email

```javascript
const isValid = stringUtils.isValidEmail('example@example.com');
// Output: true
```
