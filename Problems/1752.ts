describe("Typescript test:", () => {
    test("Testing", () => {
        expect(check([3, 4, 5, 1, 2])).toEqual(true);
    });
});

function check(nums: number[]): boolean {
    let countInterrup = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            countInterrup++;
        }
        if (countInterrup > 1) return false;
    }
    if (nums[0] < nums[nums.length - 1] && countInterrup === 1) return false;
    return true;
}
