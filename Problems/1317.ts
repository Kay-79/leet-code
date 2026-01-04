describe("Typescript test:", () => {
    test("Testing", () => {
        const n = 11;
        expect(getNoZeroIntegers(n)).toEqual([
            [9, 9],
            [8, 6],
        ]);
    });
});

function getNoZeroIntegers(n: number): number[] {
    const isZero = (v: number): boolean => {
        while (v > 0) {
            if (v % 10 === 0) return true;
            v = Math.floor(v / 10);
        }
        return false;
    };
    for (let a = 1; a <= n; a++) {
        if (!isZero(a) && !isZero(n - a)) return [a, n - a];
    }
    return [1, 1];
}
