var generate = function (numRows) {
    let result = [];
    for (let index = 0; index < numRows; index++) {
        result.push([1]);
        for (let index2 = 0; index2 < index; index2++) {
            result[index].push(1);
        }
    }
    for (let index = 1; index < numRows - 1; index++) {
        for (let index2 = 0; index2 < numRows; index2++) {
            if (result[index2][index] !== undefined && result[index2 - 1][index] !== undefined) {
                result[index2][index] = result[index2 - 1][index] + result[index2 - 1][index - 1];
            }
        }
    }
    return result;
};

// console.log(generate(5))
