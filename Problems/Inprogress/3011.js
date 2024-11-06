/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
    if (nums.length === 1) return true;
    let cache = nums[0];
    for (let u = 1; u < nums.length; u++) {
        if (nums[u] <= cache) break;
        else {
            cache = nums[u];
        }
        if (u === nums.length - 1) return true;
    }
    let newNums = [];
    let bitNums = {};
    for (let i = 0; i < nums.length; i++) {
        let countBit = nums[i].toString(2).split("1").length - 1;
        if (bitNums[countBit] === undefined) bitNums[countBit] = [nums[i]];
        else bitNums[countBit].push(nums[i]);
    }
    let testSort = [];
    let cantSort = true;
    for (const key in bitNums) {
        if (bitNums[key].length > 1 && cantSort) cantSort = false;
        bitNums[key].sort((a, b) => a - b);
        testSort.push(...bitNums[key]);
    }
    if (cantSort) return false;
    nums.sort((a, b) => a - b);
    for (let p = 0; p < nums.length; p++) {
        if (nums[p] !== testSort[p]) return false;
    }
    return true;
};

nums = [107, 76, 52];
console.log(canSortArray(nums));
