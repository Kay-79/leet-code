var largestInteger = function (num) {
    let numStr = num.toString().split("");
    for (let i = 0; i < numStr.length; i++) {
        let cache = numStr[i];
        for (let j = i + 1; j < numStr.length; j++) {
            if (!((Number(cache) + Number(numStr[j])) % 2) && Number(cache) !== Number(numStr[j]) && Number(cache) - Number(numStr[j]) < 0) {
                numStr[i] = numStr[j];
                numStr[j] = cache;
                cache = numStr[i];
            }
        }
    }
    let result = "";
    for (let j = 0; j < numStr.length; j++) {
        result += numStr[j];
    }
    result = Number(result);
    return result;
};
