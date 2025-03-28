describe("Typescript test:", () => {
    test("Testing", () => {
        expect(findDelayedArrivalTime(1, 2)).toEqual(3);
    });
});

function findDelayedArrivalTime(arrivalTime: number, delayedTime: number): number {
    return (arrivalTime + delayedTime) % 24;
}
