const ensureString = fn => {
  return (...args) => {
    if (typeof args[0] !== 'string') {
      throw new TypeError('Input must be a string');
    }
    return fn(...args);
  };
};

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const generateCharRange = (from, to) => {
  const arr = [];
  for (let i = from; i <= to; i++) {
    arr.push(String.fromCharCode(i));
  }
  return arr;
};

module.exports = { ensureString, shuffleArray, generateCharRange };
