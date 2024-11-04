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

var maxSubsequence = function (nums, k) {
    let indexedNums = nums.map((num, idx) => [num, idx]);
    indexedNums.sort((a, b) => b[0] - a[0]);
    let topKElements = indexedNums.slice(0, k);
    topKElements.sort((a, b) => a[1] - b[1]);
    return topKElements.map((item) => item[0]);
};

nums = [33, -27, -9, -83, 48];
k = 2;

console.log(maxSubsequence(nums, k));
