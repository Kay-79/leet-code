describe("Typescript test:", () => {
    test("Testing", () => {
        const operations = ["--X", "X++", "X++"];
        const res = 1;
        expect(finalValueAfterOperations(operations)).toEqual(res);
    });
});

function finalValueAfterOperations(operations: string[]): number {
    let res = 0;
    operations.forEach((o) => {
        switch (o) {
            case "--X":
            case "X--":
                res--;
                break;
            case "++X":
            case "X++":
                res++;
                break;
        }
    });
    return res;
}
