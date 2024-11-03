/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    for (let i = 0; i < num.length; i++) {
        let value = Number(num[num.length - 1 - i]);
        if (value % 2 === 1) {
            return num.slice(0, num.length - i);
        }
    }
    return "";
};

num = "35427";

console.log(largestOddNumber(num));
