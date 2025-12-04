describe("Typescript test:", () => {
    test("Testing", () => {
        const directions = "SSRSSRLLRSLLRSRSSRLRRRRLLRRLSSRR";
        expect(countCollisions(directions)).toEqual(20);
    });
});

function countCollisions(directions: string): number {
    directions = directions.replace(/^L+/, "");
    directions = directions.replace(/R+$/, "");
    return (directions.match(/R/g) || []).length + (directions.match(/L/g) || []).length;
}
