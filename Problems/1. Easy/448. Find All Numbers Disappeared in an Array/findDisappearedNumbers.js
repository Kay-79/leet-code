var findDisappearedNumbers = function (nums) {
    nums.sort((a, b) => {
        return a - b;
    });
    // return nums;
    console.log(nums);
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i + 1 == nums[i]) {
            continue;
        }
        if (nums.includes(i + 1) == false) {
            result.push(i + 1);
        }
    }
    return result;
};
