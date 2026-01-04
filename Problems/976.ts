describe("Typescript test:", () => {
    test("Testing", () => {
        const nums = [2, 1, 2];
        const res = 5;
        expect(largestPerimeter(nums)).toEqual(res);
    });
});

function largestPerimeter(nums: number[]): number {
    nums.sort((a, b) => b - a);
    for (let i = 2; i < nums.length; i++) {
        if (nums[i - 2] < nums[i - 1] + nums[i]) return nums[i - 2] + nums[i - 1] + nums[i];
    }
    return 0;
}
