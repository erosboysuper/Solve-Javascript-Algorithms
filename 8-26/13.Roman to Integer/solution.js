var romanToInt = function (s) {
  let convertNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
  let i = 0;
  for (i = 0; i < s.length; i++) {
    if (convertNum[s[i]] < convertNum[s[i + 1]]) res = res - convertNum[s[i]];
    else res = res + convertNum[s[i]];
  }

  return res;
};
romanToInt("IV");
