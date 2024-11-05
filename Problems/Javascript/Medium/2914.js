/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function (s) {
    s = s.split("");
    let result = 0;
    for (let i = 0; i < s.length; i += 2) {
        let cache = s[i];
        if (s[i + 1] !== cache) {
            result++;
            s[i] = Math.abs(Number(cache - 1));
            cache = s[i + 1];
        }
    }
    return result;
};
s = "1001";
console.log(minChanges(s));
