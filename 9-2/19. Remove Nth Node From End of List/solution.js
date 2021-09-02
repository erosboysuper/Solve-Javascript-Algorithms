// Input: head = [1,2,3,4,5], n = 2

var removeNthFromEnd = function (head, n) {
  let res = [];
  let res1 = [];

  res = head.slice(0, head.length - n);
  res1 = head.slice(head.length - n + 1);
  let res2 = res.concat(res1);
  return res2;
};
removeNthFromEnd([1, 2, 3, 4, 5], 2);
