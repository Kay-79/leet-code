describe("Typescript test:", () => {
    test("Testing", () => {
        let s: string = "baadccab";
        expect(threeConsecutiveOdds([4, 3, 2, 1])).toEqual(true);
    });
});

function threeConsecutiveOdds(arr: number[]): boolean {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) count++;
        else count = 0;
        if (count >= 3) return true;
    }
    return false;
}
