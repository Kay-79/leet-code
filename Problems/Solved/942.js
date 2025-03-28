var diStringMatch = function (s) {
    // s = "O" + s;
    let result = [0];
    for (i in s) {
        result.push(Number(i) + 1);
    }
    let cache = 0;
    for (let i = 0; i < result.length - 1; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (s[i] == "I" && result[i] > result[j]) {
                cache = result[i];
                result[i] = result[j];
                result[j] = cache;
            }
            if (s[i] == "D" && result[i] < result[j]) {
                cache = result[i];
                result[i] = result[j];
                result[j] = cache;
            }
        }
    }
    return result;
};
