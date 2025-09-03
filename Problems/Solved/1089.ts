describe("Typescript test:", () => {
    test("Testing", () => {
        const arr = [1, 0, 2, 3, 0, 4, 5, 0];
        expect(duplicateZeros(arr)).toEqual(undefined);
    });
});

/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0 && i + 1 < arr.length) {
            arr.splice(i, 0, 0);
            arr.pop();
            i++;
        }
    }
}
