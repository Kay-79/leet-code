describe("Typescript test:", () => {
    test("Testing", () => {
        expect(categorizeBox(1000, 35, 700, 300)).toEqual("Heavy");
    });
});

function categorizeBox(length: number, width: number, height: number, mass: number): string {
    let isBulky = false;
    let isHeavy = false;
    for (const v of [length, width, height, mass]) {
        if (v >= 10 ** 4) {
            isBulky = true;
            break;
        }
    }
    if (length * width * height >= 10 ** 9) isBulky = true;
    if (mass >= 100) isHeavy = true;
    if (isBulky && isHeavy) return "Both";
    if (isBulky) return "Bulky";
    if (isHeavy) return "Heavy";
    return "Neither"
}
