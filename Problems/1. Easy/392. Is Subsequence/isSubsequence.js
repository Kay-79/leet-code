var isSubsequence = function (s, t) {
    s = s.split("");
    t = t.split("");
    objS = {};
    objT = {};
    for (i in s) {
        if (objS[s[i]] > 0) {
            objS[s[i]] += 1;
        } else {
            objS[s[i]] = 1;
        }
    }
    for (i in t) {
        if (objT[t[i]] > 0) {
            objT[t[i]] += 1;
        } else {
            objT[t[i]] = 1;
        }
    }
    for (let index = t.length - 1; index >= 0; index--) {
        if (!s.includes(t[index])) {
            t.splice(index, 1);
        }
        if (objS[s[index]] < objT[s[index]]) {
            objT[s[index]]--;
            let cache = t[index];
            let cacheID = 0;
            for (e in t) {
                if (t[e] == t[index]) {
                    t.splice(e, 1);
                    cacheID = e;
                    break;
                }
            }
            if (t.includes(cache)) {
                continue;
            } else {
                t.splice(cacheID, 0, cache);
                // t.push(cache);
            }
        }
    }
    // console.log(s);
    // console.log(t);
    for (i in s) {
        if (s[i] != t[i]) return false;
    }
    return true;
};
