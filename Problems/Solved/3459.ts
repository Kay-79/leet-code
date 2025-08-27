describe("Typescript test:", () => {
    test("Testing", () => {
        const grid = [[1]];
        expect(lenOfVDiagonal(grid)).toEqual(500);
    });
});

function lenOfVDiagonal(grid: number[][]): number {
    const h = grid.length;
    const w = grid[0].length;
    const getNewPosition = (i: number, j: number, direct: number, isBreak: boolean): [number, number, number] => {
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
                return [NaN, NaN, 0];
        }
    };
    const inb = (x: number, y: number) => 0 <= x && x < h && 0 <= y && y < w;
    const DIR_CAP = 5; 
    const BROKE_CAP = 2; 
    const PHASE_CAP = 3;
    const memo = new Int16Array(h * w * DIR_CAP * BROKE_CAP * PHASE_CAP).fill(-1);

    const idxOf = (i: number, j: number, dir: number, broke: number, phase: number) =>
        (((i * w + j) * DIR_CAP + dir) * BROKE_CAP + broke) * PHASE_CAP + phase;

    const needVal = (phase: number) => (phase === 0 ? 1 : phase === 1 ? 2 : 0);

    const dp = (i: number, j: number, dir: number, broke: number, phase: number): number => {
        if (!inb(i, j) || grid[i][j] !== needVal(phase)) return 0;

        const id = idxOf(i, j, dir, broke, phase);
        if (memo[id] !== -1) return memo[id];

        let best = 1; 

        if (phase === 0) {
            const cand: [number, number, number][] = [
                [i - 1, j - 1, 1],
                [i - 1, j + 1, 2],
                [i + 1, j + 1, 3],
                [i + 1, j - 1, 4],
            ];
            for (const [nx, ny, nd] of cand) {
                if (inb(nx, ny) && grid[nx][ny] === 2) {
                    best = Math.max(best, 1 + dp(nx, ny, nd, 0, 1));
                }
            }
        } else if (phase === 1) {
            const [sx, sy, _] = getNewPosition(i, j, dir, false);
            if (inb(sx, sy) && grid[sx][sy] === 0) {
                best = Math.max(best, 1 + dp(sx, sy, dir, broke, 2)); 
            }
            if (broke === 0) {
                const [tx, ty, nd] = getNewPosition(i, j, dir, true);
                if (inb(tx, ty) && grid[tx][ty] === 0) {
                    best = Math.max(best, 1 + dp(tx, ty, nd, 1, 2)); 
                }
            }
        } else {
            const [sx, sy, _] = getNewPosition(i, j, dir, false);
            if (inb(sx, sy) && grid[sx][sy] === 2) {
                best = Math.max(best, 1 + dp(sx, sy, dir, broke, 1)); 
            }
            if (broke === 0) {
                const [tx, ty, nd] = getNewPosition(i, j, dir, true);
                if (inb(tx, ty) && grid[tx][ty] === 2) {
                    best = Math.max(best, 1 + dp(tx, ty, nd, 1, 1)); 
                }
            }
        }

        memo[id] = best;
        return best;
    };

    let ans = 0;
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (grid[i][j] === 1) {
                ans = Math.max(ans, dp(i, j, 0, 0, 0));
            }
        }
    }
    return ans;
}
