const reverse = (x) => {
  const limitNumber = 2147483648;
  const k = x < 0 ? -1 : 1;
  const n = Number(String(Math.abs(x)).split("").reverse().join(""));
  return n > limitNumber ? 0 : n * k;
};
reverse("-1245433");
