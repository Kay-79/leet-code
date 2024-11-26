describe("Javascript test:", () => {
    test("Testing", () => {
        expect(argumentsLength({}, null, "3")).toEqual(3);
    });
});

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
    return args.length;
};
