describe("Javascript test:", () => {
    test("Testing", () => {
        let hours = [0, 1, 2, 3, 4];
        let target = 2;
        let expected_output = 3;
        expect(numberOfEmployeesWhoMetTarget(hours, target)).toEqual(expected_output);
    });
});

/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
    let result = 0;
    let l = 0;
    let r = hours.length - 1;
    while (l < r) {
        if (hours[l] >= target) result++;
        if (hours[r] >= target) result++;
        l++;
        r--;
    }
    if (l === r && hours[l] >= target) result++;
    return result;
};
