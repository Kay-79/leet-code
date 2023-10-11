var countCharacters = function (words, chars) {
    // chars = chars.split("");
    let result = 0;
    for (i in words) {
        let count = 0;
        let newChards = chars.split("");
        for (j in words[i]) {
            if (newChards.includes(words[i][j]) == true) {
                for (let k = newChards.length; k >= 0; k--) {
                    if (words[i][j] == newChards[k]) {
                        newChards.splice(k, 1);
                    }
                }
                count++;
            } else {
                break;
            }
        }
        if (count == words[i].length) {
            result += count;
        }
    }
    return result;
};

console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"));
