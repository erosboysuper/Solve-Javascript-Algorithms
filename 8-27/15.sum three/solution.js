/**
 * @param {number[]} nums
 * @return {number[][]}
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]] 
*/
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i >= 1 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      }
      if (nums[i] + nums[j] + nums[k] < 0) j++;
      if (nums[i] + nums[j] + nums[k] > 0) k--;
    }
  }
  return res;
};
let nums = [-1, 0, 1, 2, -1, -4];
threeSum(nums);
