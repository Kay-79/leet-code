describe("Typescript test:", () => {
    test("Testing", () => {
        const grid = [[1]];
        expect(lenOfVDiagonal(grid)).toEqual(1);
    });
});

function lenOfVDiagonal(grid: number[][]): number {
    const h = grid.length;
    const w = grid[0].length;
    const getNewPosition = (i: number, j: number, direct: number, isBreak: boolean): number[] => {
        switch (direct) {
            case 1:
                return !isBreak ? [i - 1, j - 1, 1] : [i - 1, j + 1, 2];
            case 2:
                return !isBreak ? [i - 1, j + 1, 2] : [i + 1, j + 1, 3];
            case 3:
                return !isBreak ? [i + 1, j + 1, 3] : [i + 1, j - 1, 4];
            case 4:
                return !isBreak ? [i + 1, j - 1, 4] : [i - 1, j - 1, 1];
            default:
                return [];
        }
    };
    let maxLength = 0;
    const backTrack = (i: number, j: number, isBreak90: boolean, currentLength: number, direct: number) => {
        if (maxLength < currentLength) maxLength = currentLength;
        const currentV = grid[i][j];
        if (currentV === 1) {
            if (i - 1 >= 0 && j - 1 >= 0 && grid[i - 1][j - 1] === 2)
                backTrack(i - 1, j - 1, false, currentLength + 1, 1);
            if (i - 1 >= 0 && j + 1 < w && grid[i - 1][j + 1] === 2)
                backTrack(i - 1, j + 1, false, currentLength + 1, 2);
            if (i + 1 < h && j + 1 < w && grid[i + 1][j + 1] === 2)
                backTrack(i + 1, j + 1, false, currentLength + 1, 3);
            if (i + 1 < h && j - 1 >= 0 && grid[i + 1][j - 1] === 2)
                backTrack(i + 1, j - 1, false, currentLength + 1, 4);
        } else if (currentV === 2 || currentV === 0) {
            let position = getNewPosition(i, j, direct, false);
            if (
                position[0] < h &&
                position[1] < w &&
                position[0] >= 0 &&
                position[1] >= 0 &&
                grid[position[0]][position[1]] === Math.abs(currentV - 2)
            )
                backTrack(position[0], position[1], isBreak90, currentLength + 1, direct);
            if (!isBreak90) {
                let position90 = getNewPosition(i, j, direct, true);
                if (
                    position90[0] < h &&
                    position90[1] < w &&
                    position90[0] >= 0 &&
                    position90[1] >= 0 &&
                    grid[position90[0]][position90[1]] === Math.abs(currentV - 2)
                ) {
                    backTrack(position90[0], position90[1], true, currentLength + 1, position90[2]);
                }
            }
        }
    };
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (grid[i][j] === 1) {
                backTrack(i, j, false, 1, 0);
            }
        }
    }
    return maxLength;
}
