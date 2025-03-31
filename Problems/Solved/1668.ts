describe("Typescript test:", () => {
    test("Testing", () => {
        expect(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba")).toEqual(5);
    });
});

function maxRepeating(sequence: string, word: string): number {
    let result = 0;
    let cache = word;
    for (let i = 0; i < sequence.length; i++) {
        if (sequence.includes(cache)) {
            result++;
            cache += word;
            continue;
        }
        break;
    }
    return result;
}
