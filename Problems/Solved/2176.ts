describe("Typescript test:", () => {
    test("Testing", () => {
        expect(countPairs([3, 1, 2, 2, 2, 1, 3], 2)).toEqual(4);
    });
});

function countPairs(nums: number[], k: number): number {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && !((i * j) % k)) {
                count++;
            }
        }
    }
    return count;
}
