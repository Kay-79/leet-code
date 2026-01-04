describe("Typescript test:", () => {
    test("Testing", () => {
        expect(smallestNumber(5)).toEqual(7);
    });
});

function smallestNumber(n: number): number {
    let bin = n.toString(2).split("");
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === "0") bin[i] = "1";
    }
    return parseInt(bin.join(""), 2);
}
