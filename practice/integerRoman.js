//* Given an integer, convert it to a Roman numeral.
//* Roman numerals are represented by the following symbols:

// initially just have this conversion
// need to add the combination to use it
const conversion1 = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

//* 2 = "II", 4 = "IV", 9 = "IX", 58 = "LVIII", 1994 = "MCMXCIV"

const i1 = 1995;

const conversion = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

function integerRoman(num) {
  let result = "";

  for (const [symbol, value] of conversion) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

const result = integerRoman(i1);
console.log(result);
