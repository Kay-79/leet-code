/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    let symbols = "DC+";
    for (let i = 0; i < operations.length; i++) {
        if (!symbols.includes(operations[i])) {
            operations[i] = Number(operations[i]);
        } else {
            switch (operations[i]) {
                case "D":
                    operations[i] = operations[i - 1] * 2;
                    break;
                case "C":
                    operations.splice(i - 1, 2);
                    i -= 2;
                    break;
                case "+":
                    operations[i] = operations[i - 1] + operations[i - 2];
                    break;
                default:
                    break;
            }
        }
    }
    let result = 0;
    for (let i = 0; i < operations.length; i++) {
        result += operations[i];
    }
    // console.log(operations);
    return result;
};
ops = ["5", "2", "C", "D", "+"];
console.log(calPoints(ops));
