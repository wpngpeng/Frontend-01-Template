const convertNumberToString = (number, x) => {
  let integer = Math.floor(number);
  let fraction = number - integer;
  let string = '';

  while (integer > 0) {
    string = String(integer % x) + string;
    integer = Math.floor(integer / x);
  }
  if (fraction > 0) {
    string += ".";
  }
  while (fraction >0 && fraction<1) {
    let integer = Math.floor(fraction * x);
    string += integer;
    fraction = fraction * x - integer;
  }
  return string;
}
