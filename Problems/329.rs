pub struct Solution;

impl Solution {
    pub fn longest_increasing_path(matrix: Vec<Vec<i32>>) -> i32 {
        let m = matrix.len() as usize;
        let n = matrix[0].len() as usize;
        let mut max_val = 0;
        let mut memo = vec![vec![-1; n]; m];
        for i in 0..m {
            for j in 0..n {
                max_val = max_val.max(Self::dfs(i, j, m, n, &matrix, &mut memo));
            }
        }
        max_val
    }
    pub fn dfs(
        i: usize,
        j: usize,
        m: usize,
        n: usize,
        matrix: &Vec<Vec<i32>>,
        memo: &mut Vec<Vec<i32>>,
    ) -> i32 {
        if memo[i][j] > 0 {
            return memo[i][j];
        }
        let mut best = 1;
        let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        for d in &dirs {
            let next_i = i as i32 + d[0];
            let next_j = j as i32 + d[1];
            if next_i >= 0 && next_i < m as i32 && next_j >= 0 && next_j < n as i32 {
                let ni = next_i as usize;
                let nj = next_j as usize;

                if matrix[ni][nj] > matrix[i][j] {
                    best = best.max(1 + Self::dfs(ni, nj, m, n, matrix, memo));
                }
            }
        }
        memo[i][j] = best;
        best
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case_1() {
        let matrix = [[9, 9, 4].to_vec(), [6, 6, 8].to_vec(), [2, 1, 1].to_vec()].to_vec();
        let expected_output = 4;
        assert_eq!(Solution::longest_increasing_path(matrix), expected_output);
    }
}

fn main() {}
