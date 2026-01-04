var findTheDifference = function (s, t) {
    let alphabetS = {};
    let alphabetT = {};
    let alphabets = [];
    let alphabett = [];
    for (let i = 0; i < s.length; i++) {
        if (alphabetS[s[i]] > 0) {
            alphabetS[s[i]] += 1;
        } else {
            alphabetS[s[i]] = 1;
            alphabets.push(s[i]);
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (alphabetT[t[i]] > 0) {
            alphabetT[t[i]] += 1;
        } else {
            alphabetT[t[i]] = 1;
            alphabett.push(t[i]);
        }
    }
    if (s.length > t.length) {
        for (x in alphabets) {
            if (alphabetS[alphabets[x]] != alphabetT[alphabets[x]]) return alphabets[x];
        }
    } else {
        for (x in alphabett) {
            if (alphabetS[alphabett[x]] != alphabetT[alphabett[x]]) return alphabett[x];
        }
    }
};
