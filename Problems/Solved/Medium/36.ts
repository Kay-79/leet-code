describe("Typescript test:", () => {
    test("Testing", () => {
        expect(
            isValidSudoku([
                ["5", "3", ".", ".", "7", ".", ".", ".", "."],
                ["6", ".", ".", "1", "9", "5", ".", ".", "."],
                [".", "9", "8", ".", ".", ".", ".", "6", "."],
                ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
                ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
                ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
                [".", "6", ".", ".", ".", ".", "2", "8", "."],
                [".", ".", ".", "4", "1", "9", ".", ".", "5"],
                [".", ".", ".", ".", "8", ".", ".", "7", "9"],
            ]),
        ).toEqual(true);
    });
});

function isValidSudoku(board: string[][]): boolean {
    const set = new Set();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = board[i][j];
            if (cell === ".") continue;
            const row = `r:${i} v:${cell}`;
            const col = `c:${j} v:${cell}`;
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            const box = `b:${boxIndex} v:${cell}`;
            if (set.has(row) || set.has(col) || set.has(box)) return false;
            set.add(box).add(row).add(col);
        }
    }
    return true;
}
