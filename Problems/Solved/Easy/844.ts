describe("Typescript test:", () => {
    test("Testing", () => {
        expect(backspaceCompare("ab##", "c#d#")).toEqual(true);
    });
});

function backspaceCompare(s: string, t: string): boolean {
    while (s.includes("#") || t.includes("#")) {
        s = s.replaceAll(/[a-z]#/g, "");
        t = t.replaceAll(/[a-z]#/g, "");
        if (s[0] === "#") s = s.replace("#", "");
        if (t[0] === "#") t = t.replace("#", "");
    }
    return s === t;
}
