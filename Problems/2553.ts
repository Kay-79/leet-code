describe("Typescript test:", () => {
    test("Testing", () => {
        expect(separateDigits([13, 25, 83, 77])).toEqual([1, 3, 2, 5, 8, 3, 7, 7]);
    });
});

function separateDigits(nums: number[]): number[] {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        const numS = nums[i].toString();
        for (let j = 0; j < numS.length; j++) {
            result.push(Number(numS[j]));
        }
    }
    return result;
}
