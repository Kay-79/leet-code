/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    const regex = /[a-z]#/;
    do {
        if (t === s) return true;
        if (s[0] === "#") s = s.replace("#", "");
        if (t[0] === "#") t = t.replace("#", "");
        s = s.replace(regex, "");
        t = t.replace(regex, "");
    } while (s.includes("#") || t.includes("#"));
    return t === s;
};
s = "y#fo##f";
t = "y#f#o##f";
console.log(backspaceCompare(s, t));
