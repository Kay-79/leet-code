const reverseOnlyLetters = require("./main"); // Giả sử hàm nằm trong tệp main.js

describe("reverseOnlyLetters", () => {
    test("should reverse letters only and keep non-letters in place", () => {
        expect(reverseOnlyLetters("ab-cd")).toBe("dc-ba");
        expect(reverseOnlyLetters("a-bC-dEf-ghIj")).toBe("j-Ih-gfE-dCba");
        expect(reverseOnlyLetters("Test-case")).toBe("esac-tsTe");
        expect(reverseOnlyLetters("123-ab-")).toBe("123-ba-");
    });

    test("should handle empty string", () => {
        expect(reverseOnlyLetters("")).toBe("");
    });

    test("should handle string with no letters", () => {
        expect(reverseOnlyLetters("123-456")).toBe("123-456");
    });

    test("should handle single letter", () => {
        expect(reverseOnlyLetters("a")).toBe("a");
    });

    test("should handle string with all special characters", () => {
        expect(reverseOnlyLetters("---")).toBe("---");
    });
});

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let arr = s.split("");
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        while (l < r && !/[a-zA-Z]/.test(arr[l])) l++;
        while (l < r && !/[a-zA-Z]/.test(arr[r])) r--;
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }

    return arr.join("");
};
