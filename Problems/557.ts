describe("Typescript test:", () => {
    test("Testing", () => {
        const s = "Let's take LeetCode contest";
        expect(reverseWords(s)).toEqual("s'teL ekat edoCteeL tsetnoc");
    });
});

function reverseWords(s: string): string {
    const words = s.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("");
    }
    return words.join(" ");
}
