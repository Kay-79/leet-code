describe("findRelativeRanks", () => {
    test("Testing", () => {
        let score = [10, 3, 8, 9, 4];
        let expected_output = ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"];

        expect(findRelativeRanks(score)).toEqual(expected_output);
    });
});

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let newArr = score.map((a) => a);
    newArr.sort((a, b) => b - a);
    let result = new Array(score.length);
    for (let i = 0; i < score.length; i++) {
        for (let j = 0; j < score.length; j++) {
            if (newArr[i] === score[j]) {
                switch (i) {
                    case 0:
                        result[j] = "Gold Medal";
                        break;
                    case 1:
                        result[j] = "Silver Medal";
                        break;
                    case 2:
                        result[j] = "Bronze Medal";
                        break;
                    default:
                        result[j] = (i + 1).toFixed();
                        break;
                }
                break;
            }
        }
    }
    return result;
};
