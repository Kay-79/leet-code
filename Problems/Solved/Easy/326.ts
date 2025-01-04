describe("Typescript test:", () => {
    test("Testing", () => {
        expect(isPowerOfThree(27)).toEqual(true);
    });
});

function isPowerOfThree(n: number): boolean {
    let cache = 0;
    let indexPower = 0;
    while (cache < n) {
        cache = 3 ** indexPower;
        if (cache === n) return true;
        indexPower++;
    }
    return false;
}
