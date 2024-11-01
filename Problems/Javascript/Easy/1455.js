/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < searchWord.length) continue;
        for (let j = 0; j < searchWord.length; j++) {
            if (words[i][j] !== searchWord[j]) break;
            if (j === searchWord.length - 1) return i + 1;
        }
    }
    return -1;
};
(sentence = "i love eating burger"), (searchWord = "burg");
console.log(isPrefixOfWord(sentence, searchWord));
