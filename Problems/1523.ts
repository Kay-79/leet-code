describe("Typescript test:", () => {
    test("Testing", () => {
        const low = 3,
            high = 7;
        expect(countOdds(low, high)).toEqual(3);
    });
});

function countOdds(low: number, high: number): number {
    if ((high + low) % 2 === 1) return Math.floor((high - low) / 2 + 1);
    if (high % 2 === 1) return (high - low) / 2 + 1;
    return (high - low) / 2;
}
