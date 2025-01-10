describe("Typescript test:", () => {
    test("Testing", () => {
        expect(wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["lo", "eo"])).toEqual(["google", "leetcode"]);
    });
});

function wordSubsets(words1: string[], words2: string[]): string[] {
    const maxFreq = new Array(26).fill(0);
    for (const word of words2) {
        const freq = new Array(26).fill(0);
        for (const char of word) {
            freq[char.charCodeAt(0) - 97]++;
        }
        for (let i = 0; i < 26; i++) {
            maxFreq[i] = Math.max(maxFreq[i], freq[i]);
        }
    }
    const result = [];
    for (const word of words1) {
        const freq = new Array(26).fill(0);
        for (const char of word) {
            freq[char.charCodeAt(0) - 97]++;
        }
        let isSubset = true;
        for (let i = 0; i < 26; i++) {
            if (freq[i] < maxFreq[i]) {
                isSubset = false;
                break;
            }
        }
        if (isSubset) {
            result.push(word);
        }
    }
    return result;
}
