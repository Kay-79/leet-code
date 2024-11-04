/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
    while (nums.length !== k) {
        let l = 0;
        let r = nums.length - 1;
        let minSession = nums[0];
        let indexMax = 0;
        while (l <= r) {
            if (nums[l] < minSession) {
                minSession = nums[l];
                indexMax = l;
            }
            if (nums[r] < minSession) {
                minSession = nums[r];
                indexMax = r;
            }
            l++;
            r--;
        }
        nums.splice(indexMax, 1);
    }
    return nums;
};

nums = [33, -27, -9, -83, 48];
k = 2;

console.log(maxSubsequence(nums, k));
