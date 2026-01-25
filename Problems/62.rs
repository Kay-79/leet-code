use std::collections::HashMap;

pub struct Solution;

impl Solution {
    pub fn unique_paths(m: i32, n: i32) -> i32 {
        let mut visited: HashMap<(i32, i32), i32> = HashMap::new();
        Self::dfs(0, 0, m, n, &mut visited)
    }
    pub fn dfs(i: i32, j: i32, m: i32, n: i32, visited: &mut HashMap<(i32, i32), i32>) -> i32 {
        if i == m - 1 && j == n - 1 {
            return 1;
        }
        if i >= m || j >= n {
            return 0;
        }

        if let Some(&count) = visited.get(&(i, j)) {
            return count;
        }

        let result = Self::dfs(i + 1, j, m, n, visited) + Self::dfs(i, j + 1, m, n, visited);

        visited.insert((i, j), result);

        result
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case_1() {
        let m = 3;
        let n = 7;
        let expected_output = 28;
        assert_eq!(Solution::unique_paths(m, n), expected_output);
    }
}

fn main() {}
