describe("Typescript test:", () => {
    test("Testing", () => {
        const current = "02:30",
            correct = "04:35";
        expect(convertTime(current, correct)).toEqual(3);
    });
});

function convertTime(current: string, correct: string): number {
    const [hCurrent, mCurrent] = current.split(":").map(Number);
    const [hCorrect, mCorrect] = correct.split(":").map(Number);
    let diff = (hCorrect - hCurrent) * 60 + (mCorrect - mCurrent);
    const steps = [60, 15, 5, 1];
    let turns = 0;
    for (const step of steps) {
        turns += Math.floor(diff / step);
        diff %= step;
    }
    return turns;
}
