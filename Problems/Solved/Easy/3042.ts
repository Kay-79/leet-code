describe("Typescript test:", () => {
    test("Testing", () => {
        expect(countPrefixSuffixPairs(["a", "aba", "ababa", "aa"])).toEqual(4);
    });
});

function countPrefixSuffixPairs(words: string[]): number {
    const isPrefixAndSuffix = (str1: string, str2: string): boolean => {
        return str1 === str2.slice(0, str1.length) && str1 === str2.slice(str2.length - str1.length, str2.length);
    };
    let result = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isPrefixAndSuffix(words[i], words[j])) result++;
        }
    }
    return result;
}
