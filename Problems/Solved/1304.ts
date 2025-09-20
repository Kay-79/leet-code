describe("Typescript test:", () => {
    test("Testing", () => {
        let n = 5;
        expect(sumZero(n)).toEqual([-7, -1, 1, 3, 4]);
    });
});

function sumZero(n: number): number[] {
    let res: number[] = [];
    let mid = Math.floor(n / 2);
    if (mid % 2) {
        for (let i = 0; i < n; i++) {
            res[i] = i - mid;
        }
    } else {
        for (let i = 0; i < n; i++) {
            if (i === mid) mid--;
            res[i] = i - mid;
        }
    }
    return res;
}
