describe("Typescript test:", () => {
    test("Testing", () => {
        expect(reverse(123)).toEqual(321);
    });
});

function reverse(x: number): number {
    if (x < 0 - 2 ** 31 || x > 2 ** 31 - 1) return 0;
    const absReverse = Number(Math.abs(x).toString().split("").reverse().join(""));
    if (0 - absReverse < 0 - 2 ** 31 || absReverse > 2 ** 31 - 1) return 0;
    return x > 0 ? absReverse : 0 - absReverse;
}
