/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
    let result = "";
    let time = 1;
    let cache = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === cache && time < 2) result += s[i];
        time++;
        if (cache !== s[i]) {
            result += s[i];
            cache = s[i];
            time = 1;
        }
    }
    return result;
};
s = "leeetcode";
console.log(makeFancyString(s));
