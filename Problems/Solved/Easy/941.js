/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    if (arr.length < 3) return false;
    let flagInc = true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1] && flagInc) {
            continue;
        } else {
            flagInc = false;
            if (arr[i] >= arr[i - 1]) return false;
            if (i === 1) return false;
            continue;
        }
    }
    if (flagInc) return false;
    return true;
};
arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

console.log(validMountainArray(arr));
