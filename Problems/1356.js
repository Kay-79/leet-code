const sortByBits = (arr) => {
    arr.sort((a, b) => {
        return a - b;
    });
    // console.log(arr);
    let resultBits = [[]];
    let existCount = [];
    let maxBit = 0;
    for (let i = 0; i < arr.length; i++) {
        const binString = arr[i].toString(2);
        let countOne = 0;
        for (const j in binString) {
            if (binString[j] === "1") countOne += 1;
        }
        // console.log(countOne);
        if (!existCount.includes(countOne)) {
            existCount.push(countOne);
            resultBits[countOne] = [];
            if (maxBit < countOne) maxBit = countOne;
        }
        // console.log(countOne, arr[i]);
        resultBits[countOne].push(arr[i]);
    }
    // console.log(resultBits.toString());
    const result = [];
    for (let k = 0; k <= maxBit; k++) {
        try {
            result.push(...resultBits[k]);
        } catch (error) {}
    }
    return result;
};
arr = [10, 100, 1000, 10000];
console.log(sortByBits(arr));
