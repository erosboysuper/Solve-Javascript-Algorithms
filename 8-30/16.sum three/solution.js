/**
 * @param {number[]} nums
 * @return {number[][]}
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]] 
*/
var threeSumClosest = function (nums, target) {
  let diff = 10000;
  let res = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (Math.abs(nums[i] + nums[j] + nums[k] - target) < Math.abs(diff)) {
        diff = nums[i] + nums[j] + nums[k] - target;
        res = nums[i] + nums[j] + nums[k];
      }
      if (nums[i] + nums[j] + nums[k] === target) return target;
      if (nums[i] + nums[j] + nums[k] < target) j++;
      if (nums[i] + nums[j] + nums[k] > target) k--;
    }
  }
  return res;
};
let nums = [-1, 2, 1, -4];
threeSumClosest(nums, 1);
