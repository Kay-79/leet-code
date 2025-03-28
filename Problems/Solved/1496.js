/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    let local = [];
    local.push([0, 0].toString());
    let oldLocal = [0, 0];
    for (const key in path) {
        // console.log(path[key]);
        cache = path[key];
        let newLocal = [];
        switch (path[key]) {
            case "N":
                newLocal = [oldLocal[0] + 1, oldLocal[1]];
                break;
            case "S":
                newLocal = [oldLocal[0] - 1, oldLocal[1]];
                break;
            case "E":
                newLocal = [oldLocal[0], oldLocal[1] + 1];
                break;
            default:
                newLocal = [oldLocal[0], oldLocal[1] - 1];
                break;
        }
        if (local.includes(newLocal.toString())) return true;
        oldLocal = newLocal;
        local.push(newLocal.toString());
        // console.log(newLocal);
    }
    console.log(local);
    return false;
};
path = "NESWW";
console.log(isPathCrossing(path));
