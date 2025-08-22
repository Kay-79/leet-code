describe("Typescript test:", () => {
    test("Testing", () => {
        expect(
            minimumArea([
                [0, 1, 0],
                [1, 0, 1],
            ])
        ).toEqual(6);
    });
});

function minimumArea(grid: number[][]): number {
    const h = grid.length;
    const d = grid[0].length;

    let top = h,
        bottom = 0,
        left = d,
        right = 0;

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < d; j++) {
            if (grid[i][j] === 1) {
                if (i < top) top = i;
                if (i > bottom) bottom = i;
                if (j < left) left = j;
                if (j > right) right = j;
            }
        }
    }

    return (bottom - top + 1) * (right - left + 1);
}
