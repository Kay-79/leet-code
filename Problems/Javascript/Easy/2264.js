var largestGoodInteger = function (num) {
    let result = "";
    for (let i = 9; i >= 0; i--) {
        if (num.includes("" + i + i + i)) {
            result = "" + i + i + i;
            break;
        }
    }
    return result;
};
