var mergeSimilarItems = function (items1, items2) {
    // items1 = Object.entries(items1);
    // items2 = Object.entries(items2);
    let ret = [];
    for (let i = 0; i < items1.length; i++) {
        for (let j = 0; j < items2.length; j++) {
            if (items1[i][0] == items2[j][0]) {
                ret.push([items1[i][0], items1[i][1] + items2[j][1]]);
                items2[j][0] = null;
                items1[i][0] = null;
                break;
            }
        }
    }
    for (let i = 0; i < items1.length; i++) {
        if (items1[i][0] !== null) {
            ret.push(items1[i]);
        }
    }
    for (let i = 0; i < items2.length; i++) {
        if (items2[i][0] !== null) {
            ret.push(items2[i]);
        }
    }

    // console.log(items1);
    // console.log(items2);
    // console.log(ret);
    ret.sort(([v1], [v2]) => v1 - v2);
    return ret;
};
