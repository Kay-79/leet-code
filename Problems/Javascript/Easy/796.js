/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    for (let i = 1; i < goal.length; i++) {
        if (s.includes(goal.slice(0, i)) && s.includes(goal.slice(i, goal.length))) return true;
    }
    return false;
};
s = "abcde";
goal = "cdeab";
console.log(rotateString(s, goal));
