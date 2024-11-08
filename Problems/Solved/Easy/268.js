var missingNumber = function (nums) {
    nums.sort((a, b) => {
        return a - b;
    });
    if (nums[nums.length - 1] == nums.length - 1) return nums.length;
    for (x in nums) {
        if (x != nums[x]) return x;
    }
    // return nums.length;
};
