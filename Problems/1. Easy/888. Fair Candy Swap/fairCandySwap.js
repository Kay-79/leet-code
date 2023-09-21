var fairCandySwap = function (aliceSizes, bobSizes) {
    let sumA = 0;
    let sumB = 0;
    for (i in aliceSizes) {
        sumA += aliceSizes[i];
    }
    for (i in bobSizes) {
        sumB += bobSizes[i];
    }
    // console.log(sumA, sumB);
    // console.log((sumB - sumA) / 2);
    for (i in aliceSizes) {
        for (j in bobSizes) {
            if (bobSizes[j] - aliceSizes[i] == (sumB - sumA) / 2) {
                return [aliceSizes[i], bobSizes[j]];
            }
        }
    }
};
