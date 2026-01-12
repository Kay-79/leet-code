pub mod utils;
pub struct Solution;

impl Solution {
    pub fn min_time_to_visit_all_points(points: Vec<Vec<i32>>) -> i32 {
        let mut res = 0;
        for i in 1..points.len() {
            let max_w = (points[i][0] - points[i - 1][0]).abs();
            let max_h = (points[i][1] - points[i - 1][1]).abs();
            res += max_h.max(max_w);
        }
        res
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case() {
        let points = [[1, 1].to_vec(), [3, 4].to_vec(), [-1, 0].to_vec()].to_vec();
        let expected_output = 7;
        assert_eq!(
            Solution::min_time_to_visit_all_points(points),
            expected_output
        );
    }
}

fn main() {}
