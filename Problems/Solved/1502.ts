describe("Typescript test:", () => {
    test("Testing", () => {
        expect(canMakeArithmeticProgression([-68, -96, -12, -40, 16])).toEqual(true);
    });
});

function canMakeArithmeticProgression(arr: number[]): boolean {
    arr.sort((a, b) => a - b);
    // console.log(arr);
    const diff = Math.abs(arr[1] - arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) return false;
    }
    return true;
}
