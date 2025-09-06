describe("Typescript test:", () => {
    test("Testing", () => {
        const grid = [
            [9, 9, 8, 1],
            [5, 6, 2, 6],
            [8, 2, 6, 4],
            [6, 2, 2, 2],
        ];
        expect(largestLocal(grid)).toEqual([
            [9, 9],
            [8, 6],
        ]);
    });
});

function largestLocal(grid: number[][]): number[][] {
    const a = grid.length;
    const b = grid[0].length;
    let result: number[][] = [];
    for (let i = 1; i < a - 1; i++) {
        let row = [];
        for (let j = 1; j < b - 1; j++) {
            row.push(
                Math.max(
                    grid[i][j],
                    grid[i - 1][j - 1],
                    grid[i - 1][j],
                    grid[i - 1][j + 1],
                    grid[i][j - 1],
                    grid[i][j + 1],
                    grid[i + 1][j - 1],
                    grid[i + 1][j],
                    grid[i + 1][j + 1]
                )
            );
        }
        result.push(row);
    }
    return result;
}
