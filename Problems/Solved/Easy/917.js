/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let arr = s.split("");
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        while (l < r && !/[a-zA-Z]/.test(arr[l])) l++;
        while (l < r && !/[a-zA-Z]/.test(arr[r])) r--;
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }

    return arr.join("");
};
let s = "ab-cd";
console.log(reverseOnlyLetters(s));
