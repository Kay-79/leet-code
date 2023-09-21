var sortColors = function (nums) {
    let min = nums[0];
    // for (let i = 1; i < nums.length; i++) {
    //     if (min > nums[i]) {
    //         min = nums[i];
    //     }
    // }
    let cache;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i == j) {
                continue;
            }
            if (nums[j] > nums[i]) {
                cache = nums[i];
                nums[i] = nums[j];
                nums[j] = cache;
            }
        }
    }
    return nums;
};
