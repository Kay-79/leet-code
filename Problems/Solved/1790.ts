describe("Typescript test:", () => {
    test("Testing", () => {
        expect(areAlmostEqual("caa", "aaz")).toEqual(true);
    });
});

function areAlmostEqual(s1: string, s2: string): boolean {
    let countPair = 0;
    let pair = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            pair.push(s1[i], s2[i]);
            countPair += 0.5;
        }
    }
    if (pair[0] !== pair[3] || pair[1] !== pair[2]) return false;
    if (countPair === 1 || countPair === 0) return true;
    return false;
}
