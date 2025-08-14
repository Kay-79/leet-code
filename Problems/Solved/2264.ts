describe("Typescript test:", () => {
    test("Testing", () => {
        expect(largestGoodInteger("45556")).toEqual(6);
    });
});

function largestGoodInteger(num: string) {
    const matches = num.match(/(\d)\1\1/g);
    if (!matches) return "";
    return matches.sort().pop();
}

function largestGoodInteger(num: string) {
    let result = "";
    for (let i = 9; i >= 0; i--) {
        if (num.includes("" + i + i + i)) {
            result = "" + i + i + i;
            break;
        }
    }
    return result;
}
