describe("Typescript test:", () => {
    test("Testing", () => {
        expect(possibleStringCount("abbcccc")).toEqual(5);
    });
});

function possibleStringCount(word: string): number {
    let cache = "";
    let count = 1,
        result = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== cache) {
            result += count;
            count = 0;
            cache = word[i];
        } else count++;
    }
    return result + count;
}
