describe("numJewelsInStones", () => {
    test("Testing", () => {
        let jewels = "z";
        let stones = "ZZ";
        expect(numJewelsInStones(jewels, stones)).toBe(0);
    });
});

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let result = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) result++;
    }
    return result;
};
