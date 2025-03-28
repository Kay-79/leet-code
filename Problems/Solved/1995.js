/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
    let a = 0;
    let b = 1;
    let c = 2;
    let d = 3;
    let result = 0;
    while (10) {
        if (nums[a] + nums[b] + nums[c] == nums[d]) {
            result++;
        }
        if (a == nums.length - 4 && b == nums.length - 3 && c == nums.length - 2 && d == nums.length - 1) {
            break;
        }
        if (b == nums.length - 3 && c == nums.length - 2 && d == nums.length - 1) {
            a = a + 1;
            b = a + 1;
            c = b + 1;
            d = c + 1;
            continue;
        }
        if (c == nums.length - 2 && d == nums.length - 1) {
            b = b + 1;
            c = b + 1;
            d = c + 1;
            continue;
        }
        if (d == nums.length - 1) {
            c = c + 1;
            d = c + 1;
            continue;
        } else d++;
    }
    return result;
};

nums = [1, 1, 1, 3, 5];
console.log(countQuadruplets(nums));
