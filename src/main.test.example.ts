describe("Typescript test:", () => {
    test("Testing", () => {
        let s: string = "baadccab";
        let expected_output: number = 4;
        expect(minimizedStringLength(s)).toEqual(expected_output);
    });
});

function minimizedStringLength(s: string): number {
    let result: number = 0;
    let caches: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (!caches.includes(s[i])) {
            result++;
            caches.push(s[i]);
        }
    }
    return result;
}
