describe("Typescript test:", () => {
    test("Testing", () => {
        expect(findNumbers([3, 1, 2, 2, 2, 1, 3])).toEqual(7);
    });
});

function findNumbers(nums: number[]): number {
    let result = 0;
    nums.forEach((num) => {
        if (!(num.toString().length % 2)) result++;
    });
    return result;
}
