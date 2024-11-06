var maxArea = function (height) {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = 0; j < height.length; j++) {
            if (height[i] * (j - i) > max) {
                max = height[i] * (j - i);
            }
        }
    }
    return max;
};
