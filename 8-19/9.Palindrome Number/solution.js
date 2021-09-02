var isPalindrome = function (x) {
  let t = Number(String(x).split("").reverse().join(""));
  if (x === t) return true;
  return false;
};
isPalindrome(1121);
