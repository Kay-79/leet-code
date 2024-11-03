/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
    let result = 0;
    for (let i = 0; i < words.length; i++) {
        const cache = words[i];
        for (let j = i + 1; j < words.length; j++) {
            let s = "";
            for (let o = 0; o < words[j].length; o++) {
                s += words[j][words[j].length - 1 - o];
            }
            // console.log(s);
            if (s === cache) {
                result++;
            }
        }
    }
    return result;
};
words = ["cd", "ac", "dc", "ca", "zz"];
console.log(maximumNumberOfStringPairs(words));
