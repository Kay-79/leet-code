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
    // let q = 0;
    while (10) {
        // q++;
        // console.log(a, b, c, d);
        if (nums[a] + nums[b] + nums[c] == nums[d]) {
            result++;
        }
        const cacheA = a;
        const cacheB = b;
        const cacheC = c;
        const cacheD = d;
        if (
            cacheA == nums.length - 4 &&
            cacheB == nums.length - 3 &&
            cacheC == nums.length - 2 &&
            cacheD == nums.length - 1
        ) {
            break;
        }
        if (
            cacheB == nums.length - 3 &&
            cacheC == nums.length - 2 &&
            cacheD == nums.length - 1
        ) {
            a = cacheA + 1;
            b = a + 1;
            c = b + 1;
            d = c + 1;
            continue
        }
        if (cacheC == nums.length - 2 && cacheD == nums.length - 1) {
            b = cacheB + 1;
            c = b + 1;
            d = c + 1;
            continue
        }
        if (cacheD == nums.length - 1) {
            c = cacheC + 1;
            d = c + 1;
            continue
        } else d++;
    }
    return result;
};

nums = [1, 1, 1, 3, 5];
// console.log(countQuadruplets(nums));
