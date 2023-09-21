var isPalindrome = function (s) {
    whileList = "qwertyuioplkjhghgfdsazxcvbnm1234567890";
    whileList = whileList.split("");
    s = s.toLowerCase();
    s = s.split("");

    for (let index = s.length; index >= 0; index--) {
        if (whileList.includes(s[index]) != true) {
            s.splice(index, 1);
        }
    }
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] != s[right]) return false;
        left++;
        right--;
    }
    return true;
};
s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
