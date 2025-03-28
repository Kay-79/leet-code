describe("Typescript test:", () => {
    test("Testing", () => {
        expect(maximumValue(["1", "01", "001", "0001"])).toEqual(1);
    });
});

function maximumValue(strs: string[]): number {
    let result = 0;
    for (let i = 0; i < strs.length; i++) {
        const num = Number(strs[i]);
        if (num > result) result = Number(strs[i]);
        if (num == 0) {
            strs[i] = strs[i].replaceAll("0", "");
        } else if (num > 0) {
            strs[i] = num.toString();
        }
        if (strs[i].length > result) result = strs[i].length;
        console.log(num);
    }
    return result;
}
