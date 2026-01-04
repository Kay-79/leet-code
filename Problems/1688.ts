describe("Typescript test:", () => {
    test("Testing", () => {
        const n = 7;
        expect(numberOfMatches(n)).toEqual(6);
    });
});

function numberOfMatches(n: number): number {
    let res = 0;
    let match = 0;
    while (n > 1) {
        match = Math.floor(n / 2);
        n -= match;
        res += match;
    }
    return res;
}
