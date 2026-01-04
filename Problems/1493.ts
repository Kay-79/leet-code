describe("Typescript test:", () => {
    test("Testing", () => {
        expect(longestSubarray([1, 1, 0, 1])).toEqual(3);
    });
});

function longestSubarray(nums: number[]): number {
    const table = [];
    let length = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            length++;
        } else {
            table.push([length, i]);
            length = 0;
        }
    }
    if (length) table.push([length, nums.length - 1]);
    if (table.length === 1) return nums.length - 1;
    let result = 0;
    for (let i = 1; i < table.length; i++) {
        if (table[i][0] + table[i - 1][0] > result) result = table[i][0] + table[i - 1][0];
    }
    return result;
}
