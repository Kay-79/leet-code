describe("Typescript test:", () => {
    test("Testing", () => {
        expect(romanToInt("MCDLXXVI")).toEqual(1476);
    });
});

function romanToInt(s: string): number {
    const roman = new Map();
    roman.set("I", 1).set("V", 5).set("X", 10).set("L", 50).set("C", 100).set("D", 500).set("M", 1000);
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (roman.get(s[i]) < roman.get(s[i + 1])) {
            result += roman.get(s[i + 1]) - roman.get(s[i]);
            i++;
        } else {
            result += roman.get(s[i]);
        }
    }
    return result;
}
