describe("Typescript test:", () => {
    test("Testing", () => {
        expect(smallestNumber("DDDIII")).toEqual("4321567");
    });
});

function smallestNumber(pattern: string): string {
    let result = [1];
    let count = 1;
    let countSwap = 0;
    if (pattern[0] === "D") {
        countSwap = 1;
        count = 0;
        result = [];
    }
    for (let i = 1; i < pattern.length; i++) {
        if (pattern[i] === "I") {
            if (pattern[i - 1] === "I") {
                count++;
                result.push(count);
            } else {
                for (let j = 0; j < countSwap + 1; j++) {
                    result.push(count + countSwap + 1 - j);
                }
                count += countSwap + 1;
                countSwap = 0;
            }
        }
        if (pattern[i] === "D") {
            countSwap++;
        }
    }
    if (pattern[pattern.length - 1] === "D") {
        for (let j = 0; j < countSwap + 1; j++) {
            result.push(count + countSwap + 1 - j);
        }
    }
    if (pattern[pattern.length - 1] === "I")  result.push(count + 1);
    return result.join("");
}
