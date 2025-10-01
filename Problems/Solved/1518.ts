describe("Typescript test:", () => {
    test("Testing", () => {
        const numBottles = 15,
            numExchange = 4;
        const res = 19;
        expect(numWaterBottles(numBottles, numExchange)).toEqual(res);
    });
});

function numWaterBottles(numBottles: number, numExchange: number): number {
    let res = numBottles;
    let emptyBottles = numBottles;
    while (emptyBottles >= numExchange) {
        const newBottles = Math.floor(emptyBottles / numExchange);
        res += newBottles;
        emptyBottles = (emptyBottles % numExchange) + newBottles;
    }
    return res;
}
