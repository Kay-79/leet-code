describe("Typescript test:", () => {
    test("Testing", () => {
        const nums = [5, 3, 6, 1, 12],
            original = 3;
        expect(findFinalValue(nums, original)).toEqual(24);
    });
});
function findFinalValue(nums: number[], original: number): number {
    nums.sort((a, b) => a - b).forEach((n) => {
        if (original === n) original *= 2;
    });
    return original;
}
