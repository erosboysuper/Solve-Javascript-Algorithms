/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Input: nums = [1,2,1,3,4], k = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
 */
const check = (str) => {};
var subarraysWithKDistinct = function (nums, k) {
  let len = k;
  let cnt = 0;
  while (len <= nums.length) {
    for (let i = 0; i <= nums.length - len; i++) {
      let t = [],
        itemsize = 1;
      t.push(nums[i]);
      for (let j = i + 1; j < i + len; j++) {
        if (t.indexOf(nums[j]) === -1) {
          itemsize++;
          t.push(nums[j]);
        }
      }
      if (itemsize === k) cnt++;
    }
    len++;
  }
  return cnt;
};
subarraysWithKDistinct([1, 2, 1, 3, 4], 3);
