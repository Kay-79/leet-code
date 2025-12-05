describe("Typescript test:", () => {
    test("Testing", () => {
        const nums = [10, 10, 3, 7, 6];
        expect(countPartitions(nums)).toEqual(4);
    });
});

function countPartitions(nums: number[]): number {
    let r = nums.reduce((a, b) => a + b, 0);
    let l = 0;
    let res = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        (l += nums[i]), (r -= nums[i]);
        if ((l - r) % 2 === 0) res++;
    }
    return res;
}
