describe("Typescript test:", () => {
    test("Testing", () => {
        let nums = [6, 6, 5, 5, 4, 1];
        expect(countHillValley(nums)).toEqual(0);
    });
});

function countHillValley(nums: number[]): number {
    let rs = 0;
    for (let i = 1, prev = nums[0], n = nums.length - 1; i < n; i++) {
        if ((prev < nums[i] && nums[i] > nums[i + 1]) || (prev > nums[i] && nums[i] < nums[i + 1]))
            rs++, (prev = nums[i]);
    }
    return rs;
}
