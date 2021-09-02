var isValid = function (s) {
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) stack.push(map[s[i]]);
    else if (stack.pop() != s[i]) return false;
  }
  return stack.length === 0;
};
isValid("()[]{}");
