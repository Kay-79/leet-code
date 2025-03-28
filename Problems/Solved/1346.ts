describe("Typescript test:", () => {
    test("Testing", () => {
        expect(checkIfExist([10, 2, 5, 3])).toEqual(true);
        expect(checkIfExist([-2, 0, 10, -19, 4, 6, -8])).toEqual(false);
    });
});

function checkIfExist(arr: number[]): boolean {
    let z = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] * 2)) {
            if (arr[i] === 0 && !z) {
                z = true;
                arr.splice(i, 1);
                i--;
                continue;
            }
            return true;
        }
    }
    return false;
}
