/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let pair = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    for (const a of s) {
        if (a === "(" || a === "[" || a === "{") {
            stack.push(a);
        } else {
            if (stack.pop() !== pair[a]) return false;
        }
    }
    return stack.length === 0;
};

s = "([])";

console.log(isValid(s));
