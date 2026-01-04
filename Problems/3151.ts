describe("Typescript test:", () => {
    test("Testing", () => {
        expect(isArraySpecial([2, 1, 4])).toEqual(true);
    });
});

function isArraySpecial(nums: number[]): boolean {
    let isFirstOdd = nums[0] % 2 === 1;
    for (let i = 1; i < nums.length; i++) {
        const isDiff = nums[i] % 2 === 1;
        if (isDiff !== isFirstOdd) {
            isFirstOdd = !isFirstOdd;
        } else return false;
    }
    return true;
}
