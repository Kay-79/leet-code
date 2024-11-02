/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
    let newWords = sentence.split(" ");

    for (let i = 1; i < newWords.length; i++) {
        if (newWords[i][0] === newWords[i - 1][newWords[i - 1].length - 1]) continue;
        else return false;
    }
    if (sentence[0] !== sentence[sentence.length - 1]) return false;
    if (newWords.length === 1) {
        if (sentence[0] === sentence[sentence.length - 1]) return true;
        else return false;
    }
    return true;
};

sentence = "Leetcode eisc cool";

console.log(isCircularSentence(sentence));
