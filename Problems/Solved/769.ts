describe("Typescript test:", () => {
    test("Testing", () => {
        expect(maxChunksToSorted([2, 0, 1])).toEqual(1);
    });
});

function maxChunksToSorted(arr: number[]): number {
    let maxChunks = 0;
    for (let i = 0; i < arr.length; i++) {
        let isChunk = true;
        for (let j = i; j >= 0; j--) {
            if (arr[j] > i) {
                isChunk = false;
                break;
            }
        }
        if (isChunk) maxChunks++;
    }
    return maxChunks;
}
