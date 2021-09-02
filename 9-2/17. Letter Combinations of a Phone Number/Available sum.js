function MakeString(digits, arr, word, loc, res) {
  if (digits.length - 1 < loc) {
    res.push(word);
    return;
  }
  for (let i = 0; i < arr[digits[loc] - 2].length; i++) {
    MakeString(digits, arr, word + arr[digits[loc] - 2][i], loc + 1, res);
  }
}
var letterCombinations = function (digits) {
  let res = [];
  let arr = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  if (digits.length === 0) return [];
  for (let i = 0; i < arr[digits[0] - 2].length; i++) {
    let word = arr[digits[0] - 2][i];
    MakeString(digits, arr, word, 1, res);
  }
  return res;
};
