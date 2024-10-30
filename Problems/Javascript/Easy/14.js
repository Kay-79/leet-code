strs = ["flower", "flow", "flight"]
var longestCommonPrefix = function (strs) {
    if (strs.length < 2) { return strs.toString() }
    let max = strs[0].length
    let maxIndex = 0
    for (let index = 1; index < strs.length; index++) {
        if (strs[index].lenth > max) {
            max = strs[index].lenth
            maxIndex = index
        }
    }
    let result = ''
    for (let index = 0; index < max; index++) {
        let cache = strs[maxIndex][index]
        for (let index2 = 0; index2 < strs.length; index2++) {
            if (strs[index2][index] == cache) { continue }
            else return result
        }
        result += cache
    }
    return result
};

// console.log(longestCommonPrefix(strs))