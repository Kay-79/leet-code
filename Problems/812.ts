describe("Typescript test:", () => {
    test("Testing", () => {
        const points = [
            [-35, 19],
            [40, 19],
            [27, -20],
            [35, -3],
            [44, 20],
            [22, -21],
            [35, 33],
            [-19, 42],
            [11, 47],
            [11, 37],
        ];
        const res = 2;
        expect(largestTriangleArea(points)).toEqual(res);
    });
});

function largestTriangleArea(points: number[][]): number {
    let max = 0;
    for (let i = 0; i < points.length; i++) {
        const a = points[i];
        for (let j = i + 1; j < points.length; j++) {
            const b = points[j];
            for (let k = j + 1; k < points.length; k++) {
                const c = points[k];
                const da = Math.sqrt((b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2);
                const db = Math.sqrt((c[0] - b[0]) ** 2 + (c[1] - b[1]) ** 2);
                const dc = Math.sqrt((c[0] - a[0]) ** 2 + (c[1] - a[1]) ** 2);
                const p = (da + db + dc) / 2;
                const s = Math.sqrt(p * (p - da) * (p - db) * (p - dc));
                if (s > max) max = s;
            }
        }
    }
    return max;
}
