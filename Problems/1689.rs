pub struct Solution;

impl Solution {
    pub fn min_partitions(n: String) -> i32 {
        let mut res = 0;
        for s in n.chars() {
            if s.to_digit(10).unwrap() > res {
                res = s.to_digit(10).unwrap();
            }
        }
        res as i32
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case_1() {
        let n = "27346209830709182346".to_string();
        let expected_output = 9;
        assert_eq!(Solution::min_partitions(n), expected_output);
    }
}

fn main() {}
