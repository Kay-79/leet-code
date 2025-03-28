describe("Typescript test:", () => {
    test("Testing", () => {
        let s: string = "baadccab";
        expect(smallestEqual([4, 3, 2, 1])).toEqual(2);
    });
});

function smallestEqual(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 === nums[i]) return i;
    }
    return -1;
}
