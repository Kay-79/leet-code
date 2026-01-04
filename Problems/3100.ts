describe("Typescript test:", () => {
    test("Testing", () => {
        const numBottles = 13,
            numExchange = 6;
        const res = 15;
        expect(maxBottlesDrunk(numBottles, numExchange)).toEqual(res);
    });
});

function maxBottlesDrunk(numBottles: number, numExchange: number): number {
    let res = numBottles;
    let emptyBottles = numBottles;
    while (emptyBottles >= numExchange) {
        emptyBottles -= numExchange;
        res++;
        emptyBottles++;
        numExchange++;
    }
    return res;
}
