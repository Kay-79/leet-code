describe("Typescript test:", () => {
    test("Testing", () => {
        const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
        const res = 49;
        expect(maxArea(height)).toEqual(res);
    });
});

const maxArea = (height: number[]) => {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        let h = Math.min(height[left], height[right]);
        if (h * (right - left) > max) {
            max = h * (right - left);
        }
        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return max;
};
