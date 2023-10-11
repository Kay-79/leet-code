var lengthOfLastWord = function (s) {
    s = s.split(" ");
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i].length != 0) {
            return s[i].length;
        }
    }
    return 0;
};
