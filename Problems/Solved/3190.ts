function minimumOperations(nums: number[]): number {
    let result = nums.length;
    for (const num of nums) {
        if (!(num % 3)) result--;
    }
    return result;
}
