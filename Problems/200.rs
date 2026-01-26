pub struct Solution;

impl Solution {
    pub fn num_islands(grid: Vec<Vec<char>>) -> i32 {
        let m = grid.len() as usize;
        let n = grid[0].len() as usize;
        let mut memo = vec![vec![false; n]; m];
        let mut count = 0;
        for i in 0..m {
            for j in 0..n {
                if grid[i][j] == '1' && !memo[i][j] {
                    count += 1;
                    (Self::dfs(i, j, m, n, &grid, &mut memo));
                }
            }
        }
        count
    }
    pub fn dfs(
        i: usize,
        j: usize,
        m: usize,
        n: usize,
        grid: &Vec<Vec<char>>,
        memo: &mut Vec<Vec<bool>>,
    ) {
        if memo[i][j] || grid[i][j] == '0' {
            return;
        }
        memo[i][j] = true;
        let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        for d in &dirs {
            let next_i = i as i32 + d[0];
            let next_j = j as i32 + d[1];
            if next_i >= 0 && next_i < m as i32 && next_j >= 0 && next_j < n as i32 {
                let ni = next_i as usize;
                let nj = next_j as usize;
                Self::dfs(ni, nj, m, n, grid, memo);
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case_1() {
        let grid = [
            ['1', '1', '1', '1', '0'].to_vec(),
            ['1', '1', '0', '1', '0'].to_vec(),
            ['1', '1', '0', '0', '0'].to_vec(),
            ['0', '0', '0', '0', '0'].to_vec(),
        ]
        .to_vec();
        let expected_output = 1;
        assert_eq!(Solution::num_islands(grid), expected_output);
    }
}

fn main() {}
