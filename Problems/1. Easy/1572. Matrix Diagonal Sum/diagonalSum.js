var diagonalSum = function (mat) {
    let result = 0;
    for (let i = 0; i < mat.length; i++) {
        result += mat[i][i];
        if (i != mat[i].length - 1 - i) {
            result += mat[i][mat[i].length - 1 - i];
        }
    }
    return result;
};
