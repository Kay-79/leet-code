var removeDuplicates = function (nums) {
    let cache = nums[nums.length - 1];
    let result = 1;
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] == cache) {
            nums.splice(i, 1);
            nums.push();
        } else {
            result++;
        }
        cache = nums[i];
    }
    return result;
};
nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
/**
Runtime
Details
63ms
Beats 64.44%of users with JavaScript
Memory
Details
44.57MB
Beats 57.88%of users with JavaScript
 */
