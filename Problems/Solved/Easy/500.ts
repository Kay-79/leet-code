describe("Typescript test:", () => {
    test("Testing", () => {
        expect(findWords(["Hello", "Alaska", "Dad", "Peace"])).toEqual(["Alaska", "Dad"]);
    });
});

function findWords(words: string[]): string[] {
    let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let indexRow = 0;
        let isSameRow = true;
        for (let p = 0; p < rows.length; p++) {
            if (rows[p].includes(words[i][0].toLowerCase())) {
                indexRow = p;
                break;
            }
        }
        for (let j = 1; j < words[i].length; j++) {
            if (rows[indexRow].includes(words[i][j].toLowerCase())) continue;
            isSameRow = false;
        }
        if (isSameRow) result.push(words[i]);
    }
    return result;
}
