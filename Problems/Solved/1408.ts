describe("Typescript test:", () => {
    test("Testing", () => {
        expect(stringMatching(["mass", "as", "hero", "superhero"])).toEqual(["as", "hero"]);
    });
});

function stringMatching(words: string[]): string[] {
    let result: string[] = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (j === i || result.includes(words[j])) continue;
            if (words[i].includes(words[j])) result.push(words[j]);
        }
    }
    return result;
}
