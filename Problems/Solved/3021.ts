import type { forEachChild } from "typescript";

describe("Typescript test:", () => {
    test("Testing", () => {
        const n = 3,
            m = 2;
        expect(flowerGame(n, m)).toEqual(3);
    });
});

function flowerGame(n: number, m: number): number {
    let oddN = n % 2 ? (n + 1) / 2 : n / 2;
    let evenN = n % 2 ? (n - 1) / 2 : n / 2;
    let oddM = m % 2 ? (m + 1) / 2 : m / 2;
    let evenM = m % 2 ? (m - 1) / 2 : m / 2;
    return oddN * evenM + evenN * oddM;
}
