describe("Typescript test:", () => {
    test("Testing", () => {
        expect(generateParenthesis(3)).toEqual(["((()))", "(()())", "(())()", "()(())", "()()()"]);
    });
});

function generateParenthesis(n: number): string[] {
    let result: string[] = [];
    
    function recusion(opening: number, closing: number, str: string) {
        if (!opening && !closing) {
            result.push(str);
            return;
        }
        if (opening > 0) recusion(opening - 1, closing, str + "(");
        if (opening < closing) recusion(opening, closing - 1, str + ")");
    }
    recusion(n, n, "");
    return result;
}
