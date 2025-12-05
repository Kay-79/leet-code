describe("Typescript test:", () => {
    test("Testing", () => {
        const nums = [13, 23, 12];
        expect(sumDigitDifferences(nums)).toEqual(4);
    });
});

function sumDigitDifferences(nums: number[]): number {
    const n = nums.length;
    const numDigits = nums[0].toString().length;
    let res = 0;
    for (let pos = 0; pos < numDigits; pos++) {
        const counts = new Array(10).fill(0);
        for (let i = 0; i < n; i++) {
            const digit = Math.floor(nums[i] / 10 ** pos) % 10;
            counts[digit]++;
        }
        let samePairs = 0;
        for (let count of counts) {
            if (count > 1) {
                samePairs += (count * (count - 1)) / 2;
            }
        }
        const totalPairs = (n * (n - 1)) / 2;
        res += totalPairs - samePairs;
    }
    return res;
}
