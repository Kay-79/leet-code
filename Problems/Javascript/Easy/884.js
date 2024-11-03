/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let result = [];
    let s1Str = s1.split(" ");
    let s2Str = s2.split(" ");
    let arrDup1 = [];
    let arrDup2 = [];
    for (let i = 0; i < s1Str.length; i++) {
        let cache = s1Str[i];
        let isDuplecate = false;
        for (let j = i + 1; j < s1Str.length; j++) {
            if (cache === s1Str[j]) {
                arrDup1.push(s1Str[j]);
                s1Str.splice(j, 1);
                j--;
                isDuplecate = true;
            }
        }
        if (isDuplecate) {
            arrDup1.push(s1Str[i]);
            s1Str.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < s2Str.length; i++) {
        let cache = s2Str[i];
        let isDuplecate = false;
        for (let j = i + 1; j < s2Str.length; j++) {
            if (cache === s2Str[j]) {
                arrDup2.push(s2Str[j]);
                s2Str.splice(j, 1);
                j--;
                isDuplecate = true;
            }
        }
        if (isDuplecate) {
            arrDup2.push(s2Str[i]);
            s2Str.splice(i, 1);
            i--;
        }
    }
    console.log(s1Str);
    console.log(s2Str);
    console.log("arrDup1", arrDup1);
    console.log("arrDup2", arrDup2);
    let lengthCheck = 0;
    if (s1Str.length > s2Str.length) lengthCheck = s1Str.length;
    else lengthCheck = s2Str.length;
    for (let i = 0; i < lengthCheck; i++) {
        if (s1Str[i] !== s2Str[i]) {
            if (s1Str[i] && !arrDup2.includes(s1Str[i])) result.push(s1Str[i]);
            if (s2Str[i] && !arrDup1.includes(s2Str[i])) result.push(s2Str[i]);
        }
    }
    for (let i = 0; i < result.length; i++) {
        let cache = result[i];
        let isDuplecate = false;
        for (let j = i + 1; j < result.length; j++) {
            if (cache === result[j]) {
                result.splice(j, 1);
                j--;
                isDuplecate = true;
            }
        }
        if (isDuplecate) {
            result.splice(i, 1);
            i--;
        }
    }
    return result;
};

s1 = "fo ly ly";
s2 = "fo fo etx";

console.log(uncommonFromSentences(s1, s2));
