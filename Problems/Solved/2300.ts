describe("Typescript test:", () => {
    test("Testing", () => {
        const spells = [15, 14, 39],
            potions = [22],
            success = 224;
        const res = [1, 1, 1];
        expect(successfulPairs(spells, potions, success)).toEqual(res);
    });
});

function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions.sort((a, b) => a - b);
    const n = potions.length;
    const res: number[] = new Array(spells.length);
    for (let i = 0; i < spells.length; i++) {
        const s = spells[i];
        const need = Math.ceil(success / s);
        let l = 0,
            r = n;
        while (l < r) {
            const mid = Math.floor((l + r) / 2);
            if (potions[mid] < need) l = mid + 1;
            else r = mid;
        }
        res[i] = n - l;
    }
    return res;
}
