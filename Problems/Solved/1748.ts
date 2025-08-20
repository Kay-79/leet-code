describe("Typescript test:", () => {
    test("Testing", () => {
        expect(sumOfUnique([1, 2, 3, 2])).toEqual(4);
    });
});

function sumOfUnique(nums: number[]): number {
    const count: Record<number, number> = {};
    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
    }
    let sum = 0;
    for (const num in count) {
        if (count[num] === 1) {
            sum += Number(num);
        }
    }
    return sum;
}
