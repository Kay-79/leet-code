describe("Typescript test:", () => {
    test("Testing", () => {
        const nums = [3, 2, 1, 4];
        expect(findNonMinOrMax(nums)).toEqual(2);
    });
});

function findNonMinOrMax(nums: number[]): number {
    if (nums.length < 3) return -1;
    return nums.sort((a, b) => a - b)[1];
}
