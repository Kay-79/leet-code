describe("Typescript test:", () => {
    test("Testing", () => {
        expect(sumOfMultiples(7)).toEqual(21);
    });
});

function sumOfMultiples(n: number): number {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        if (!(i % 3) || !(i % 5) || !(i % 7)) {
            result += i;
            continue;
        }
    }
    return result;
}
