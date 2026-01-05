pub struct Solution;

impl Solution {
    pub fn max_matrix_sum(matrix: Vec<Vec<i32>>) -> i64 {
        let len = matrix.len();
        let mut neg_count: usize = 0;
        let mut sum_abs: i64 = 0;
        let mut min_abs: i32 = i32::MAX;
        for i in 0..len {
            for j in 0..len {
                let val = matrix[i][j];
                if val < 0 {
                    neg_count += 1;
                }
                let abs_val = val.abs();
                sum_abs += abs_val as i64;
                if abs_val < min_abs {
                    min_abs = abs_val;
                }
            }
        }
        if neg_count % 2 == 0 {
            return sum_abs;
        }
        sum_abs - 2 * (min_abs as i64)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case_1() {
        let matrix = [[1, -1].to_vec(), [-1, 1].to_vec()].to_vec();
        let expected_output = 4;
        assert_eq!(Solution::max_matrix_sum(matrix), expected_output);
    }
    #[test]
    fn test_case_2() {
        let matrix = [
            [1, 2, 3].to_vec(),
            [-1, -2, -3].to_vec(),
            [1, 2, 3].to_vec(),
        ]
        .to_vec();
        let expected_output = 4;
        assert_eq!(Solution::max_matrix_sum(matrix), expected_output);
    }
}

fn main() {}
