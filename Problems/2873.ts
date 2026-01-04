describe("Typescript test:", () => {
    test("Testing", () => {
        expect(maximumTripletValue([12, 6, 1, 2, 7])).toEqual(77);
    });
});

function maximumTripletValue(nums: number[]): number {
    let maxTriplet = 0;
    let maxElement = 0;
    let maxDiff = 0;
    for (const num of nums) {
        maxTriplet = Math.max(maxTriplet, maxDiff * num);
        maxElement = Math.max(maxElement, num);
        maxDiff = Math.max(maxDiff, maxElement - num);
    }
    return maxTriplet;
}
