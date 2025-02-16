/**
 * @param {string} s
 * @return {string}
 */
const modifyString = function (s) {
    let listString = [...s];
    for (let i = 0; i < listString.length; i++) {
        if (listString[i] !== "?") continue;
        if (listString[i - 1] !== "a" && listString[i + 1] !== "a") {
            listString[i] = "a";
            continue;
        }
        if (listString[i - 1] !== "b" && listString[i + 1] !== "b") {
            listString[i] = "b";
            continue;
        }
        listString[i] = "c";
    }
    return listString.join("");
};
s = "j?qg??b";
console.log(modifyString(s));
