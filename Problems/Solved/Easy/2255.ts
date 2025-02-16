describe("Typescript test:", () => {
    test("Testing", () => {
        expect(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc")).toEqual(3);
    });
});

function countPrefixes(words: string[], s: string): number {
    let result = 0;
    for (let i = 0; i < words.length; i++) {
        if (s.startsWith(words[i])) result++;
    }
    return result;
}
