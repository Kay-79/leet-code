var addDigits = function (num) {
    let numNew = num.toString();
    let result = num;
    while (numNew.length != 1) {
        result = 0;
        for (let i = 0; i < numNew.length; i++) {
            result += Number(numNew[i]);
        }
        numNew = result.toString();
    }
    return result;
};
