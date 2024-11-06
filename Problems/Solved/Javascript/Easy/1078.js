/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
    const texts = text.split(" ");
    let result = [];
    for (let i = 0; i < texts.length - 2; i++) {
        if (texts[i] !== first) continue;
        if (texts[i + 1] !== second) continue;
        result.push(texts[i + 2]);
    }
    return result;
};
text = "alice is a good girl she is a good student";
first = "a";
second = "good";
console.log(findOcurrences(text, first, second));
