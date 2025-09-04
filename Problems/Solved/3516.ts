describe("Typescript test:", () => {
    test("Testing", () => {
        const x = 2,
            y = 7,
            z = 4;
        expect(findClosest(x, y, z)).toEqual(1);
    });
});

function findClosest(x: number, y: number, z: number): number {
    const xz = Math.abs(x - z);
    const yz = Math.abs(y - z);
    return xz === yz ? 0 : xz < yz ? 1 : 2;
}
