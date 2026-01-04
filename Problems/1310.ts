describe("Typescript test:", () => {
    test("Testing", () => {
        const arr = [1, 3, 4, 8],
            queries = [
                [0, 1],
                [1, 2],
                [0, 3],
                [3, 3],
            ];
        expect(xorQueries(arr, queries)).toEqual([2, 7, 14, 8]);
    });
});

function xorQueries(arr: number[], queries: number[][]): number[] {
    const result: number[] = [];
    for (let i = 0; i < queries.length; i++) {
        let cache = arr[queries[i][0]];
        for (let j = queries[i][0] + 1; j < queries[i][1] + 1; j++) {
            cache = cache ^ arr[j];
        }
        result.push(cache);
    }
    return result;
}
