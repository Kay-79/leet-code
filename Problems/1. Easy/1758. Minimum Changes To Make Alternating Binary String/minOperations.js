const minOperations = (t) => {
    let s = t.split("");
    let s2 = t.split("");
    // console.log(s2);
    let cache = s[0];
    let result = 0;
    for (let i = 1; i < s.length; i++) {
        // console.log(s[i]);
        // console.log(cache);
        if (s[i] == cache) {
            if (cache == "1") {
                s[i] = "0";
            } else s[i] = "1";
            result++;
        }
        cache = s[i];
    }
    if (s2[0] == "0") {
        cache = "1";
    } else cache = "0";
    let result2 = 1;
    for (let i = 1; i < s2.length; i++) {
        // console.log(s[i]);
        // console.log(cache);
        if (s2[i] == cache) {
            if (cache == "1") {
                s2[i] = "0";
            } else s2[i] = "1";
            result2++;
        }
        cache = s2[i];
    }
    // console.log(s);
    if (result < result2) return result;
    return result2;
};
const s = "10010100";
console.log(minOperations(s));
