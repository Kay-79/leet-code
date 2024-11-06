var isPalindrome = function (x) {
    x = x.toString();
    for (let index = 0; index < x.length / 2; index++) {
        if (x[index] == x[x.length - 1 - index]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};
