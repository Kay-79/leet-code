var firstPalindrome = function (words) {
    for (w in words) {
        if (words[w].length == 1) return words[w];
        // console.log(words[w]);
        let left = 0;
        let right = words[w].length - 1;
        while (left < right) {
            if (words[w][left] == words[w][right]) {
                if (left == right || right - left == 2 || right - left == 1) {
                    return words[w];
                }
            } else {
                break;
            }
            left++;
            right--;
        }
    }
    return "";
};
