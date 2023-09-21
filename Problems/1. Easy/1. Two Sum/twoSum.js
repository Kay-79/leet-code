function twoSum(nums, target) {
    for (let index = 0; index < nums.length; index++) {
        for (let index2 = 0; index2 < nums.length; index2++) {
            if (index == index2) {
                continue;
            }
            if (nums[index] + nums[index2] == target) {
                return [index, index2];
            }
        }
    }
}
