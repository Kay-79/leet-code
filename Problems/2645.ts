describe("Typescript test:", () => {
    test("Testing", () => {
        expect(addMinimum("aaabab")).toEqual(6);
    });
});

function addMinimum(word: string): number {
    let result = 0;
    const table = [["abc"], ["ab", "ac", "bc"], ["a", "b", "c"]];
    const score = [0, 1, 2];
    while (word.length > 0) {
        let isBreak = false;
        for (let i = 0; i < table.length; i++) {
            for (let j = 0; j < table[i].length; j++) {
                if (word.slice(0, table[i][j].length) === table[i][j]) {
                    word = word.replace(table[i][j], "");
                    result += score[i];
                    isBreak = true;
                }
            }
            if (isBreak) break;
        }
    }
    return result;
}
