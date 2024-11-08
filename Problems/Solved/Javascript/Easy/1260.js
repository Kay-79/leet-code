/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
    if (grid.length === 1 && grid[0].length === 1) return grid;
    let cache = [];
    for (let i = 0; i < grid.length; i++) {
        cache.push(...grid[i]);
    }
    if (k > cache.length) {
        k = k % cache.length;
    }
    let numsShift = cache.slice(cache.length - k, cache.length);
    numsShift.push(...cache);
    let result = [];
    console.log(numsShift);
    console.log(grid[0].length);
    for (let j = 0; j < numsShift.length - k; j += 0) {
        result.push(numsShift.slice(j, j + grid[0].length));
        j += grid[0].length;
    }
    return result;
};

grid = [[1], [2], [3], [4], [7], [6], [5]];
k = 23;

console.log(shiftGrid(grid, k));
