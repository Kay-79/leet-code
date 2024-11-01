var plusOne = function (digits) {
    let flag = -1;
    for (let index = digits.length - 1; index >= 0; index--) {
        if (digits[index] < 9) {
            digits[index] += 1;
            return digits;
        } else {
            digits[index] = 0;
            if (index == digits.length - 1 && digits.length == 1) {
                digits.splice(index, 0, 0);
                digits[index] += 1;
            } else {
                if (digits[index] < 9) {
                    digits[index] = 0;
                }
                flag = index;
            }
        }
    }
    if (flag != -1) {
        digits.splice(flag, 0, 1);
    }
    return digits;
};
