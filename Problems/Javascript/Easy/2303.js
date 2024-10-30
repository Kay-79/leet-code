/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
    if (!income) return 0;
    let index = 0;
    for (let i = 0; i < brackets.length; i++) {
        if (income < brackets[i][0]) {
            index = i;
            break;
        }
        if (i == brackets.length - 1) index = i;
    }
    console.log(index);
    if (index == 0) {
        if (income < brackets[0][0]) return (brackets[0][1] * income) / 100;
        else return (brackets[0][0] * brackets[0][1]) / 100;
    }
    let result = 0;
    let cache = 0;
    for (let j = 0; j < index; j++) {
        result += ((brackets[j][0] - cache) * brackets[j][1]) / 100;
        cache = brackets[j][0];
    }
    result += ((income - brackets[index - 1][0]) * brackets[index][1]) / 100;
    return result;
};
brackets = [
    [1, 0],
    [2, 97],
    [3, 20],
    [4, 89],
    [5, 54],
];
income = 5;
console.log(calculateTax(brackets, income));
