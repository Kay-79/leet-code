import type { forEachChild } from "typescript";

describe("Typescript test:", () => {
    test("Testing", () => {
        const grid = [
            [1, 7, 3],
            [9, 8, 2],
            [4, 5, 6],
        ];
        expect(sortMatrix(grid)).toEqual([
            [8, 2, 3],
            [9, 6, 7],
            [4, 5, 1],
        ]);
    });
});

function sortMatrix(grid: number[][]): number[][] {
    const n = grid.length;
    const digArr = [];
    let i = 0,
        j = n - 1;
    let temp = [];
    while (i < n) {
        temp.push(grid[i][j]);
        i++;
        j++;
        if (i >= n && j >= n) {
            digArr.push(temp);
            temp = [];
            (i = 1), (j = 0);
        } else if (j >= n) {
            digArr.push(temp);
            temp = [];
            j = n - i - 1;
            i = 0;
        } else if (i >= n) {
            digArr.push(temp);
            temp = [];
            i = n - j + 1;
            j = 0;
        }
    }
    for (let i = 1; i < digArr.length - 1; i++) {
        digArr[i].sort((a, b) => (i < n - 1 ? a - b : b - a));
    }
    (i = 0), (j = n - 1);
    for (let k = 0; k < digArr.length; k++) {
        for (let l = 0; l < digArr[k].length; l++) {
            grid[i][j] = digArr[k][l];
            i++;
            j++;
            if (i >= n && j >= n) {
                (i = 1), (j = 0);
            } else if (j >= n) {
                j = n - i - 1;
                i = 0;
            } else if (i >= n) {
                i = n - j + 1;
                j = 0;
            }
        }
    }
    return grid;
}
