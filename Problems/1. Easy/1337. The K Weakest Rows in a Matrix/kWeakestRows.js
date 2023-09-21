var kWeakestRows = function (mat, k) {
    let power = [];
    let result = [];
    for (i in mat) {
        power[i] = [0, 0];
        for (j in mat[i]) {
            if (mat[i][j] == 0) break;
            power[i][0]++;
        }
        // console.log(i);
        power[i][1] = Number(i);
    }
    power.sort(([a], [b]) => {
        return [a] - [b];
    });
    for (let n = 0; n < k; n++) {
        result.push(power[n][1]);
    }
    return result;
};
/**
Runtime
67 ms
Beats
9.82%
Memory
44.9 MB
Beats
11.16%
 */
