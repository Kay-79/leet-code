var arithmeticTriplets = function (nums, diff) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let cache = nums[i];
        let count = 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] - cache == diff) {
                cache = nums[j];
                count++;
            }
            if (count == 3) {
                result += 1;
                break;
            }
        }
    }
    return result;
};
(nums = [0, 1, 4, 6, 7, 10]), (diff = 3);
console.log(arithmeticTriplets(nums, diff));
