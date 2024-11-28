describe("Typescript test:", () => {
    test("Testing", () => {
        expect(totalMoney(20)).toEqual(96);
    });
});

function totalMoney(n: number): number {
    let result = 0;
    let w = 0;
    let d = 1;
    for (let i = 1; i <= n; i++) {
        result += w + d;
        d++;
        if (!(i % 7)) {
            w++;
            d = 1;
        }
    }
    return result;
}
