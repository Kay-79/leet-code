var checkIfExist = function (arr) {
    let flag = false;
    for (let indexPos = 0; indexPos < arr.length; indexPos++) {
        if (arr.includes(arr[indexPos] * 2)) {
            if (arr[indexPos] == 0 && flag == false) {
                arr[indexPos] == null;
                flag = true;
                continue;
            }
            return true;
        }
    }
    return false;
};
