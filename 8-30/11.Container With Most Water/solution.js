/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  // for (let i = 0; i < height.length; i++) {
  //   for (let j = i + 1; j < height.length; j++) {
  //     let temp = (j - i) * Math.min(height[i], height[j]);
  //     if (max < temp) max = temp;
  //   }
  // }
  let i = 0;
  let j = height.length;
  while (i < j) {
    {
      let temp = (j - i) * Math.min(height[i], height[j]);
      if (max < temp) max = temp;
      if (height[i] < height[j]) i++;
      else j--;
    }
  }

  return max;
};
height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
maxArea(height);
