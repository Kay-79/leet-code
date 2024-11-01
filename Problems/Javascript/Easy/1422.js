const maxScore = (t) => {
    const s = t.split("");
    let indexSplit = 1;
    let result = 0;
    while (indexSplit < s.length) {
        let countZero = 0;
        let countOne = 0;
        for (let i = 0; i < s.length; i++) {
            if (i < indexSplit) {
                if (s[i] == "0") {
                    countZero++;
                }
            } else {
                if (s[i] == "1") {
                    countZero++;
                }
            }
        }
        countOne + countZero > result ? (result = countOne + countZero) : (result = result);
        indexSplit++;
    }
    return result;
};
s = "00";
console.log(maxScore(s));
