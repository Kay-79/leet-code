describe("Typescript test:", () => {
    test("Testing", () => {
        expect(
            numberOfPoints([
                [3, 6],
                [1, 5],
                [4, 7],
            ])
        ).toEqual(7);
    });
});

function numberOfPoints(nums: number[][]): number {
    let result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums[i][0]; j <= nums[i][nums[i].length - 1]; j++) {
            if (!result.includes(j)) result.push(j);
        }
    }
    return result.length;
}
