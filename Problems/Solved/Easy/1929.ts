describe("Typescript test:", () => {
    test("Testing", () => {
        expect(getConcatenation([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1]);
    });
});

function getConcatenation(nums: number[]): number[] {
    return nums.concat(...nums);
}
