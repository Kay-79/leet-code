describe("Typescript test:", () => {
    test("Testing", () => {
        const words = ["cool", "lock", "cook"];
        const res = ["c", "o"];
        expect(commonChars(words)).toEqual(res);
    });
});

function commonChars(words: string[]): string[] {
    const res: string[] = [];
    const minF = new Array(26).fill(Infinity);
    words.forEach((word) => {
        const f = new Array(26).fill(0);
        for (let i = 0; i < word.length; i++) f[word.charCodeAt(i) - 97]++;
        for (let i = 0; i < 26; i++) minF[i] = Math.min(minF[i], f[i]);
    });
    for (let i = 0; i < 26; i++) {
        for (let k = 0; k < minF[i]; k++) res.push(String.fromCharCode(97 + i));
    }
    return res;
}
