/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
    let allCost = 0;
    for (let i = 0; i < neededTime.length; i++) {
        allCost += neededTime[i];
    }
    for (let i = 1; i < colors.length; i++) {
        if (colors[i] !== colors[i - 1] && colors[i] !== colors[i + 1]) {
            allCost -= neededTime[i];
        }
    }
    return allCost;
};
colors = "aabaa";
neededTime = [1, 2, 3, 4, 1];
console.log(minCost(colors, neededTime));
