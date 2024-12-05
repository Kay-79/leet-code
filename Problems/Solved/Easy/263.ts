describe("Typescript test:", () => {
    test("Testing", () => {
        expect(isUgly(6)).toEqual(true);
    });
});

function isUgly(n: number): boolean {
    if (!n) return false;
    for (var p of [2, 3, 5]) while (n % p == 0) n /= p;
    return n == 1;
}
