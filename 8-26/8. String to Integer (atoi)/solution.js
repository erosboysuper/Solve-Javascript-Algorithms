var myAtoi = function (s) {
  let i = 0;
  let res = 0;
  let maxnum = 2147483647;
  let sign = 1;
  let minnum = -maxnum - 1;
  while (s[i] === " ") i++;
  if (s[i] === "+" || s[i] === "-") {
    sign = s[i] === "+" ? 1 : -1;
    i++;
  }
  while (s[i] >= "0" && s[i] <= "9") {
    res = res * 10 + (s[i] - "0");
    if (sign === 1 && res > maxnum) return maxnum;
    if (sign === -1 && res > maxnum + 1) return minnum;
    i++;
  }
  return res * sign;
};
s = "             -42";
myAtoi(s);
