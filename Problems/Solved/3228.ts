describe("Typescript test:", () => {
    test("Testing", () => {
        const s = "1001101";
        const res = 4;
        expect(maxOperations(s)).toEqual(res);
        expect(maxOperations("110")).toEqual(2);
        expect(maxOperations("111101100")).toEqual(10);
    });
});

function maxOperations(s: string): number {
    let res = 0,
        count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") {
            count++;
        } else {
            if (s[i - 1] === "1") res += count;
        }
    }
    return res;
}
