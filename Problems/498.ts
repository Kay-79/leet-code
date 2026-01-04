describe("Typescript test:", () => {
    test("Testing", () => {
        const mat = [
            [2, 5],
            [8, 4],
            [0, -1],
        ];
        expect(findDiagonalOrder(mat)).toEqual([2, 5, 8, 0, 4, -1]);
    });
});

function findDiagonalOrder(mat: number[][]): number[] {
    let i = 0,
        j = 0,
        direct = "up";
    const h = mat.length;
    const d = mat[0].length;
    const result: number[] = [];
    while (i < h && j < d) {
        result.push(mat[i][j]);
        if ((j === 0 || i === h - 1) && direct == "down") {
            direct = "up";
            if (i === h - 1) {
                i++;
            } else {
                j--;
                i += 2;
            }
        }
        if ((i === 0 || j === d - 1) && direct == "up") {
            direct = "down";
            if (j === d - 1) {
                j++;
            } else {
                i--;
                j += 2;
            }
        }
        if (direct === "up") {
            i--;
            j++;
        }
        if (direct === "down") {
            i++;
            j--;
        }
    }
    return result;
}

// [ Time taken: 31 m 54 s ]
