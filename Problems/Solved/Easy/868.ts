describe("Typescript test:", () => {
    test("Testing", () => {
        expect(binaryGap(6)).toEqual(1);
    });
});

function binaryGap(n: number): number {
    let bin = n.toString(2);
    console.log("Bin: ", bin);
    let result = 0;
    let index = 0;
    for (let i = 1; i < bin.length; i++) {
        if (bin[i] === "1") {
            if (i - index > result) {
                result = i - index;
            }
            index = i;
        }
    }
    return result;
}
