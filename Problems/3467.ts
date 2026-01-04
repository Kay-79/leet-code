describe("Typescript test:", () => {
    test("Testing", () => {
        expect(transformArray(nums)).toEqual([0, 0, 1, 1]);
    });
});

const nums = [4, 3, 2, 1];

function transformArray(nums: number[]): number[] {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2) {
            result.push(1);
        } else {
            result.unshift(0);
        }
    }
    return result;
}
