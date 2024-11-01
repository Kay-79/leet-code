/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    let newS = s.split(" ");
    let result = "";
    for (let i = 0; i < k; i++) {
        result += " " + newS[i];
    }
    return result.trim();
};
s = "Hello how are you Contestant";
k = 4;
console.log(truncateSentence(s, k));
