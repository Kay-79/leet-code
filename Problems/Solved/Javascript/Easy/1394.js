/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    arr.sort((a, b) => b - a);
    let result = -1;
    for (let i = 0; i < arr.length; i++) {
        let luckyNum = arr[i];
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === luckyNum) count++;
        }
        if (count === luckyNum) return count;
    }
    return result;
};
arr = [1, 2, 2, 3, 3, 3];
console.log(findLucky(arr));
