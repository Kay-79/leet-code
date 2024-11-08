/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
    let numFirst = "";
    let numSecond = "";
    let numTaget = "";
    for (let i = 0; i < firstWord.length; i++) {
        numFirst += firstWord[i].charCodeAt() - 97;
    }
    for (let i = 0; i < secondWord.length; i++) {
        numSecond += secondWord[i].charCodeAt() - 97;
    }
    for (let i = 0; i < targetWord.length; i++) {
        numTaget += targetWord[i].charCodeAt() - 97;
    }
    if (Number(numFirst) + Number(numSecond) === Number(numTaget)) return true;
    else return false;
};

(firstWord = "acb"), (secondWord = "cba"), (targetWord = "cdb");
console.log(isSumEqual(firstWord, secondWord, targetWord));
