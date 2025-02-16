describe("Typescript test:", () => {
    test("Testing", () => {
        expect(
            areaOfMaxDiagonal([
                [6, 5],
                [8, 6],
                [2, 10],
                [8, 1],
                [9, 2],
                [3, 5],
                [3, 5],
            ]),
        ).toEqual(20);
    });
});

function areaOfMaxDiagonal(dimensions: number[][]): number {
    let maxDiagonal = 0;
    let result = 0;
    for (const [width, height] of dimensions) {
        const diagonal = (width ** 2 + height ** 2) ** 0.5;
        if (diagonal > maxDiagonal) {
            maxDiagonal = diagonal;
            result = width * height;
        }
        if (diagonal === maxDiagonal) {
            if (width * height > result) {
                result = width * height;
            }
        }
    }
    return result;
}
