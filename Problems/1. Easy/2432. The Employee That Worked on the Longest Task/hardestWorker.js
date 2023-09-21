var hardestWorker = function (n, logs) {
    let countLongest = new Array(n).fill(0);
    for (let i = 0; i <= logs.length - 1; i++) {
        if (i == 0) {
            if (countLongest[logs[i][0]] < logs[i][1]) {
                countLongest[logs[i][0]] = logs[i][1];
            }
        } else {
            if (countLongest[logs[i][0]] < logs[i][1] - logs[i - 1][1]) {
                countLongest[logs[i][0]] = logs[i][1] - logs[i - 1][1];
            }
        }
        // console.log(countLongest);
    }
    let longest = [countLongest[countLongest.length - 1], -1];
    // console.log(longest);
    for (let index = countLongest.length; index >= 0; index--) {
        if (countLongest[index] >= longest[0]) {
            longest[0] = countLongest[index];
            longest[1] = index;
        }
    }
    // console.log(countLongest);
    // console.log(longest[0]);
    // console.log(longest[1]);
    return longest[1];
};
