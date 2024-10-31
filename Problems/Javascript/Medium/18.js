/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    let time = 1;
    let cache = nums[nums.length];
    let newNums = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === cache && time < 4) newNums.push(nums[i]);
        time++;
        if (cache !== nums[i]) {
            newNums.push(nums[i]);
            cache = nums[i];
            time = 1;
        }
    }
    let result = [];
    const seen = new Set();
    let a = 0;
    let b = 1;
    let c = 2;
    let d = 3;
    const check = (_a, _b, _c, _d) => {
        if (newNums[_a] + newNums[_b] + newNums[_c] + newNums[_d] === target) {
            const value = [newNums[_a], newNums[_b], newNums[_c], newNums[_d]];
            const key = value.toString();
            if (!seen.has(key)) {
                seen.add(key);
                result.push(value);
            }
        }
    };
    while (a <= newNums.length - 4) {
        check(a, b, c, d);
        b = a + 1;
        c = b + 1;
        d = c + 1;
        while (b <= newNums.length - 3) {
            check(a, b, c, d);
            c = b + 1;
            d = c + 1;
            while (c <= newNums.length - 2) {
                check(a, b, c, d);
                d = c + 1;
                while (d <= newNums.length - 1) {
                    check(a, b, c, d);
                    d++;
                }
                c++;
            }
            b++;
        }
        a++;
    }
    return result;
};
nums = [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2,
];
target = 8;
console.log(fourSum(nums, target));
/* [`[-3,-2,2,3]`,[-3,-1,1,3],[-3,0,0,3],`[-3,0,1,2]`,[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],`[-1,0,0,1]`] */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    let time = 1;
    let cache = nums[nums.length];
    let newNums = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === cache && time < 4) newNums.push(nums[i]);
        time++;
        if (cache !== nums[i]) {
            newNums.push(nums[i]);
            cache = nums[i];
            time = 1;
        }
    }
    let result = [];
    const seen = new Set();
    let a = 0;
    let b = 1;
    let c = 2;
    let d = 3;
    const check = (_a, _b, _c, _d) => {
        if (newNums[_a] + newNums[_b] + newNums[_c] + newNums[_d] === target) {
            const value = [newNums[_a], newNums[_b], newNums[_c], newNums[_d]];
            const key = value.toString();
            if (!seen.has(key)) {
                seen.add(key);
                result.push(value);
            }
        }
    };
    while (a <= newNums.length - 4) {
        check(a, b, c, d);
        b = a + 1;
        c = b + 1;
        d = c + 1;
        while (b <= newNums.length - 3) {
            check(a, b, c, d);
            c = b + 1;
            d = c + 1;
            while (c <= newNums.length - 2) {
                check(a, b, c, d);
                d = c + 1;
                while (d <= newNums.length - 1) {
                    check(a, b, c, d);
                    d++;
                }
                c++;
            }
            b++;
        }
        a++;
    }
    return result;
};
nums = [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2,
];
target = 8;
console.log(fourSum(nums, target));
/* [`[-3,-2,2,3]`,[-3,-1,1,3],[-3,0,0,3],`[-3,0,1,2]`,[-2,-1,0,3],[-2,-1,1,2],[-2,0,0,2],`[-1,0,0,1]`] */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    let time = 1;
    let cache = nums[nums.length];
    let newNums = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === cache && time < 4) newNums.push(nums[i]);
        time++;
        if (cache !== nums[i]) {
            newNums.push(nums[i]);
            cache = nums[i];
            time = 1;
        }
    }
    let result = [];
    const seen = new Set();
    let a = 0;
    let b = 1;
    let c = 2;
    let d = 3;
    const check = (_a, _b, _c, _d) => {
        if (newNums[_a] + newNums[_b] + newNums[_c] + newNums[_d] === target) {
            const value = [newNums[_a], newNums[_b], newNums[_c], newNums[_d]];
            const key = value.toString();
            if (!seen.has(key)) {
                seen.add(key);
                result.push(value);
            }
        }
    };
    while (a <= newNums.length - 4) {
        check(a, b, c, d);
        b = a + 1;
        c = b + 1;
        d = c + 1;
        while (b <= newNums.length - 3) {
            check(a, b, c, d);
            c = b + 1;
            d = c + 1;
            while (c <= newNums.length - 2) {
                check(a, b, c, d);
                d = c + 1;
                while (d <= newNums.length - 1) {
                    check(a, b, c, d);
                    d++;
                }
                c++;
            }
            b++;
        }
        a++;
    }
    return result;
};
nums = [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2,
];
target = 8;
console.log(fourSum(nums, target));

/* [ Time taken: 1 hr 5 m 21 s ] */
