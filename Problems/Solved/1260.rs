pub fn shift_grid(grid: Vec<Vec<i32>>, k: i32) -> Vec<Vec<i32>> {
    if grid.len() == 1 && grid[0].len() == 1 {
        return grid;
    }
    let mut cache: Vec<i32> = vec![];
    for row in &grid {
        cache.extend_from_slice(row);
    }
    let cache_len = cache.len();
    let mut k = k as usize;
    if k > cache_len {
        k = k % cache_len;
    }
    let nums_shift = cache[cache_len - k..].to_vec();
    let mut nums_shift = nums_shift;
    nums_shift.extend_from_slice(&cache);
    let mut result: Vec<Vec<i32>> = vec![];
    let row_len = grid[0].len();
    let mut j = 0;
    while j < nums_shift.len() - k {
        result.push(nums_shift[j..j + row_len].to_vec());
        j += row_len;
    }
    result
}
