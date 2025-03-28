/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
    const words = word.split("");
    let result = "";
    for (let i = 0; i < words.length; i++) {
        let count = 1;
        let cache = words[i];
        for (let j = i + 1; j < words.length; j++) {
            if (cache === words[j]) {
                if (count >= 9) {
                    result += count + cache;
                    count = 1;
                    i++;
                } else {
                    count++;
                    i++;
                }
            } else {
                if (count > 1) {
                } else count = 1;
                result += count + cache;
                cache = words[j];
                break;
            }
        }
        if (i === words.length - 1) result += count + cache;
    }
    return result;
};

const word1 = "aaaaaaaaaaaaaabb";
const word2 = "aag";

console.log(compressedString(word1));
console.log(compressedString(word2));

//3163
