describe("Typescript test:", () => {
    test("Testing", () => {
        const flowerbed = [1, 0, 0, 0, 1],
            n = 1;
        expect(canPlaceFlowers(flowerbed, n)).toEqual(true);
    });
});

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let emptySlot = 0;
    let canPlant = 0;
    let j = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        const f = flowerbed[i];
        if (f) {
            if (emptySlot > 1) {
                canPlant += Math.floor(emptySlot / 2);
                if (canPlant >= n) return true;
            }
            j = emptySlot;
            emptySlot = 0;
            break;
        } else emptySlot++;
        if (i === flowerbed.length - 1) {
            return Math.floor((emptySlot + 1) / 2) >= n;
        }
    }
    for (let i = j + 1; i < flowerbed.length; i++) {
        const f = flowerbed[i];
        if (f) {
            if (emptySlot > 2) {
                canPlant += Math.floor((emptySlot - 1) / 2);
                if (canPlant >= n) return true;
            }
            emptySlot = 0;
        } else emptySlot++;
    }
    canPlant += Math.floor(emptySlot / 2);
    return canPlant >= n;
}
