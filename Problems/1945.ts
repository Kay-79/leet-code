describe("Typescript test:", () => {
    test("Testing", () => {
        expect(getLucky("iiii", 1)).toEqual(36);
    });
});

function getLucky(s: string, k: number): number {
    let numS = "";
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        numS += s[i].charCodeAt(0) - 96;
    }
    for (let i = 0; i < k; i++) {
        result = 0;
        for (let j = 0; j < numS.length; j++) {
            result += Number(numS[j]);
        }
        numS=result.toString()
    }
    return result;
}
