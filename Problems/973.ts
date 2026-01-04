describe("Typescript test:", () => {
    test("Testing", () => {
        const points = [
                [6, 10],
                [-3, 3],
                [-2, 5],
                [0, 2],
            ],
            k = 3;
        expect(kClosest(points, k)).toEqual([
            [
                [6, 10],
                [0, 2],
                [-3, 3],
            ],
        ]);
    });
});

function kClosest(points: number[][], k: number): number[][] {
    const distancesMin = [];
    const table: Record<string, number[][]> = {};
    for (let i = 0; i < points.length; i++) {
        const d = points[i][0] ** 2 + points[i][1] ** 2;
        table[d] === undefined ? (table[d] = [points[i]]) : table[d].push(points[i]);
        distancesMin.push(d);
    }
    distancesMin.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(...table[distancesMin[i]]);
        if (result.length === k) break;
    }
    return result;
}
