/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let odd = n;
    let even = 0;
    let result = 1;
    while (odd > 1) {
        odd -= 2;
        even++;
        let numerator = 1;
        for (let i = 0; i < odd + even; i++) {
            numerator *= i + 1;
        }
        console.log(numerator);
        let denominator = 1;
        for (let i = 0; i < odd + even - 2; i++) {
            denominator *= i + 1;
        }
        console.log(denominator);

        result += numerator / (2 * denominator);
    }
    return result;
};
const n = 4;
console.log(climbStairs(n));
/**
 * Case 5
 * 1 1 1 1 1
 * 1 1 2 1
 * 2 2 1
 * 2 1 1 1
 * 1 2 1 1
 * 1 2 2
 * 2 1 2
 * Case 6
 * 1 1 1 1 1 1
 * 1 1 1 1 2
 * 1 1 2 2
 * 2 2 2
 */
