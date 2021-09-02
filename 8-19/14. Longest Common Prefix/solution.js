/**
 * @param {string[]} strs
 * @return {string}
Input: strs = ["flower","flow","flight"]
\*/
const checkfunc = (strs, check) => {
  for (let item in strs) {
    let temp = strs[item].slice(0, check.length);
    if (temp !== check) return false;
  }
  return true;
};
var longestCommonPrefix = function (strs) {
  let n = strs[0].length;
  while (n > 0) {
    //for (let i = 0; i < strs[0].length - n + 1; i++) {
    let check = strs[0].slice(0, n);
    if (checkfunc(strs, check)) return check;

    n--;
  }
  return "";
};
longestCommonPrefix(["flower", "flow", "flight"]);
