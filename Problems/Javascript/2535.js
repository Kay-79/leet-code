/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        x += nums[i];
    }
    let numStr = nums.toString();
    numStr = numStr.replace("[", "").replace("]", "").split(",");
    let y = 0;
    for (let i = 0; i < numStr.length; i++) {
        for (let k = 0; k < numStr[i].length; k++) {
            y += Number(numStr[i][k]);
        }
    }
    return Math.abs(x - y);
};
nums = [1, 15, 6, 3];
console.log(differenceOfSum(nums));
