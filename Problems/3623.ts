describe("Typescript test:", () => {
    test("Testing", () => {
        const points = [
            [1, 0],
            [2, 0],
            [3, 0],
            [2, 2],
            [3, 2],
        ];
        expect(countTrapezoids(points)).toEqual(3);
    });
});

function countTrapezoids(points: number[][]): number {
    const pointNum: Map<bigint, bigint> = new Map();
    const module = 1000000007n;
    let res = 0n;
    let sum = 0n;
    for (const point of points) {
        pointNum.set(BigInt(point[1]), (pointNum.get(BigInt(point[1])) || 0n) + 1n);
    }
    for (const p of pointNum.values()) {
        const edge = (p * (p - 1n)) / 2n;
        res = (res + sum * edge) % module;
        sum = (sum + edge) % module;
    }
    return Number(res);
}
