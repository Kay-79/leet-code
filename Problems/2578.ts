describe("Typescript test:", () => {
    test("Testing", () => {
        const num = 4325;
        const res = 59;
        expect(splitNum(num)).toEqual(res);
    });
});

function splitNum(num: number): number {
    const nums = num
        .toString()
        .split("")
        .map((n) => Number(n));
    nums.sort();
    let n1 = "";
    let n2 = "";
    let flag = true;
    nums.forEach((n) => {
        if (flag) {
            n1 += n;
            flag = !flag;
        } else {
            n2 += n;
            flag = !flag;
        }
    });
    return Number(n1) + Number(n2);
}
