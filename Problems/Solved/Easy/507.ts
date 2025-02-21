describe("Typescript test:", () => {
    test("Testing", () => {
        expect(checkPerfectNumber(120)).toEqual(false);
    });
});

function checkPerfectNumber(num: number): boolean {
    if (num <= 1) return false;
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num;
}
