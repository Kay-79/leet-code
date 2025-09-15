describe("Typescript test:", () => {
    test("Testing", () => {
        let text = "hello world",
            brokenLetters = "ad";
        expect(canBeTypedWords(text, brokenLetters)).toEqual(1);
    });
});

const canBeTypedWords = (text: string, brokenLetters: string): number => {
    const brokenLetterSet = new Set(brokenLetters);
    return text.split(" ").filter((word) => {
        return !word.split("").some((letter) => brokenLetterSet.has(letter));
    }).length;
};
