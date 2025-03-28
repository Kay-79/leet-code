describe("Typescript test:", () => {
    test("Testing", () => {
        expect(judgeCircle("UD")).toEqual(true);
    });
});

function judgeCircle(moves: string): boolean {
    let countU = 0;
    let countD = 0;
    let countR = 0;
    let countL = 0;
    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case "U":
                countU++;
                break;
            case "D":
                countD++;
                break;
            case "L":
                countL++;
                break;
            case "R":
                countR++;
                break;
            default:
                break;
        }
    }
    if (countD - countU === 0 && countL - countR === 0) return true;
    return false;
}
