/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * [1, 2, 3, 4, 5, 7, 8, 9, 12, 23] -> "1-5, 7-9, 12, 23"
 */
var func = function (nums) {
  len = nums.length;
  let res = "";
  res += `${nums[0]}`;
  for (let i = 1; i < len; i++) {
    if (nums[i] - nums[i - 1] !== 1) res += `,${nums[i]}`;
    else {
      if (nums[i + 1] - nums[i] !== 1) res += `-${nums[i]}`;
    }
  }
  return res;
};
var nums = [1, 2, 3, 4, 5, 7, 8, 9, 12, 23];
func(nums);
