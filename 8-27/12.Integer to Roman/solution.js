var intToRoman = function (s) {
  let convertNum = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  let res = "";

  let keyf = Object.keys(convertNum);
  let len = keyf.length;
  let k = len - 1;
  let valf = Object.values(convertNum);
  while (s > 0) {
    if (s >= keyf[k]) {
      res += valf[k];
      s -= convertNum.keys(k);
    } else k--;
  }

  return res;
};
intToRoman(9);
