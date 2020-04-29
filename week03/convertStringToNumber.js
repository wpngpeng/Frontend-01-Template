
const convertStringToNumber = (string, x) => {
  if (arguments.length < 2) {
    x = 10;
  }
  const chars = string.split('');
  let number = 0;

  let i = 0;
  while (i < chars.length && chars[i] !== '.') {
    number = number * x;
    number += chars[i].codePointAt(0) - '0'.codePointAt(0);
    i++;
  }

  if (chars[i] === '.') {
    i++;
  }

  let fraction = 1;
  while (i < chars.length) {
    fraction = fraction / x;
    number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction;
    i++;
  }

 while (x === 16 && chars[i].match(/[af]/)) {
    fraction = fraction / x;
    number += (chars[i].codePointAt(0) - 'a'.codePointAt(0) + 10) * fraction;
    i++;
}
  return number;
}
