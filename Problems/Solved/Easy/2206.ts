describe("Typescript test:", () => {
    test("Testing", () => {
        expect(divideArray([3, 2, 3, 2, 2, 2])).toEqual(true);
    });
});

function divideArray(nums: number[]): boolean {
    const cache = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (cache.has(nums[i])) {
            cache.set(nums[i], cache.get(nums[i]) + 1);
        } else {
            cache.set(nums[i], 1);
        }
    }
    for (const [key, value] of cache) {
        if (value % 2 === 1) return false;
    }
    return true;
}
