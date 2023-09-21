var uniquePaths = function (m, n) {
    let ways = new Array(m * n).fill(0);
    ways[0] = 1;
    for (let indexPos = 0; indexPos < m * n - 1; indexPos++) {
        if (ways[indexPos] != 0) {
            if (indexPos <= m * n && indexPos % n != n - 1) {
                ways[indexPos + 1] += ways[indexPos];
            }
            if (indexPos < m * n - n) {
                ways[indexPos + n] += ways[indexPos];
            }
        }
    }
    return ways[m * n - 1];
};
