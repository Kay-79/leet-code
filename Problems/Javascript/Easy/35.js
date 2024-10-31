/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let indexInseart = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
        if (nums[i] < target) indexInseart = i + 1;
    }
    return indexInseart;
};
(nums = [1, 3, 5, 6]), (target = 5);
console.log(searchInsert(nums, target));
