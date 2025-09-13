describe("Typescript test:", () => {
    test("Testing", () => {
        const s = "successes";

        expect(maxFreqSum(s)).toEqual(6);
    });
});

function maxFreqSum(s: string): number {
    const ht: Record<string, number> = {};
    for (let i = 0; i < s.length; i++) {
        if (ht[s[i]]) ht[s[i]] += 1;
        else ht[s[i]] = 1;
    }
    let max = [0, 0];
    for (const [key, value] of Object.entries(ht)) {
        if (["u", "e", "o", "a", "i"].includes(key)) {
            if (max[0] < value) {
                max[0] = value;
            }
        } else if (max[1] < value) max[1] = value;
    }
    return max[0] + max[1];
}
