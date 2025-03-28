describe("Typescript test:", () => {
    test("Testing", () => {
        expect(getFinalState([2, 1, 3, 5, 6], 5, 2)).toEqual([8, 4, 6, 5, 6]);
        expect(getFinalState([1, 2], 3, 4)).toEqual([16, 8]);
    });
});

function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    let min = Math.min(...nums);
    let indexMin = nums.indexOf(min);
    for (let i = 0; i < k; i++) {
        nums[indexMin] *= multiplier;
        min = Math.min(...nums);
        indexMin = nums.indexOf(min);
    }
    return nums;
}
