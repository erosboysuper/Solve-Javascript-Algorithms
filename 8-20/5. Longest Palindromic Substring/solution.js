var isPalindrome = function (x) {
  var temp = x.split("").reverse().join("");
  if (x === temp) return true;
  return false;
};
var longestPalindrome = function (s) {
  var n = s.length;
  var t = "";
  while (n > 0) {
    for (let i = 0; i <= s.length - n; i++) {
      t = s.slice(i, i + n);
      if (isPalindrome(t)) return t;
    }
    n--;
  }
  return t;
};
longestPalindrome("babad");
