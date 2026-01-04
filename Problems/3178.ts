describe("Typescript test:", () => {
    test("Testing", () => {
        let n = 3,
            k = 5;
        expect(numberOfChild(n, k)).toEqual(1);
    });
});

function numberOfChild(n: number, k: number): number {
    let step = 1;
    let firstZero = false;
    for (let i = 0; i < n; i += step) {
        if (i === n - 1 || (!i && firstZero)) {
            step = -step;
            firstZero = true;
        }
        if (k === 0) return i;
        k--;
    }
    return 0;
}
