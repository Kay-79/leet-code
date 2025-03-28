describe("Typescript test:", () => {
    test("Testing", () => {
        expect(maximum69Number(9669)).toEqual(9969);
    });
});

function maximum69Number(num: number): number {
    let max = num;
    const check = (i: number): number => {
        let s = num.toString();
        for (let j = 0; j < s.length; j++) {
            if (i === j) {
                let arr = s.split("");
                arr[i] = Number(arr[i]) > 7 ? "6" : "9";
                s = arr.join("");
                break;
            }
        }
        return Number(s);
    };
    for (let i = 0; i < num.toString().length; i++) {
        let newV = check(i);
        if (newV > max) max = newV;
    }
    return max;
}
