describe("Typescript test:", () => {
    test("Testing", () => {
        expect(isMonotonic([1, 3, 2])).toEqual(false);
    });
});

function isMonotonic(nums: number[]): boolean {
    let isDec = false;
    let isInc = false;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === 0) continue;
        if (nums[i] - nums[i - 1] > 0) {
            isInc = true;
        } else isDec = true;
    }
    console.log(isDec, isInc);
    if (isDec && isInc) return false;
    return true;
}
