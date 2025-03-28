var maxArea = function (height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        h = Math.min(height[left], height[right]);
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
