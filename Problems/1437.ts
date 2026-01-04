describe("Typescript test:", () => {
    test("Testing", () => {
        expect(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2)).toEqual(true);
        expect(kLengthApart([1, 0, 0, 1, 0, 1], 2)).toEqual(false);
    });
});

function kLengthApart(nums: number[], k: number): boolean {
    let least = 0;
    let isByPass = false;
    for (let i = nums.indexOf(1); i < nums.length; i++) {
        if (nums[i] === 0) least++;
        else {
            if (least < k && isByPass) return false;
            least = 0;
        }
        if (!isByPass) isByPass = !isByPass;
    }
    return true;
}
