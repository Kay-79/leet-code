describe("Typescript test:", () => {
    test("Testing", () => {
        expect(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4])).toEqual(6);
    });
});

function zeroFilledSubarray(nums: number[]): number {
    let count = 0;
    let result = 0;
    function subs(n: number) {
        return (n * (n + 1)) / 2;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) count++;
        if (count !== 0 && (nums[i] !== 0 || i === nums.length - 1)) {
            result += subs(count);
            count = 0;
        }
    }
    return result;
}
