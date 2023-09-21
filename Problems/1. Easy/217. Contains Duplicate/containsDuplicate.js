var containsDuplicate = function (nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        let cache = nums[i];
        nums.splice(i, 1);
        if (nums.includes(cache)) return true;
    }
    return false;
};
//https://leetcode.com/problems/contains-duplicate/submissions/1052479863/