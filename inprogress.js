/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
    const words = word.split("");
    let result = "";
    for (let i = 0; i < words.length; i++) {
        let cache = words[i];
        let count = 1;
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
                count++;
                result += count + cache;
                cache = words[j];
            }
        }
        if (i === words.length - 1) result += count + cache;
    }
    return result;
};

const word = "aaaaaaaaaaaaaabb";

console.log(compressedString(word));

//3163
