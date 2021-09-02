const check = (newstr) => {
  for (let i = 0; i < newstr.length - 1; i++) {
    if (newstr.slice(i + 1).includes(newstr[i])) return false;
    // for (let j = i + 1; j < newstr.length; j++)
    //   if (newstr[j] === newstr[i]) return false;
  }
  return true;
};
var lengthOfLongestSubstring = function (s) {
  let len = s.length;

  while (len > 0) {
    for (let i = 0; i <= s.length - len; i++) {
      if (check(s.slice(i, i + len))) {
        console.log(len);
        return len;
      }
    }
    len--;
  }
  return 0;
};
lengthOfLongestSubstring(
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
);
