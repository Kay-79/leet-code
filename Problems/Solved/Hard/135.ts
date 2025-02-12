describe("Typescript test:", () => {
    test("Testing", () => {
        expect(candy([1, 0, 2])).toEqual(5);
    });
});

function candy(ratings: number[]): number {
    let results = new Array(ratings.length).fill(1);
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) results[i] = results[i] + 1;
    }
    for (let i = ratings.length - 2; i > 0; i--) {
        if (ratings[i] < ratings[i + 1]) {
            results[i] = Math.max(results[i] + 1, results[i + 1]);
        }
    }
    return results.reduce((sum, candies) => sum + candies, 0);
}
