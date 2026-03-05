pub struct Solution;

impl Solution {
    pub fn min_operations(s: String) -> i32 {
        let mut res = [0, 0];
        let mut temp = '0';
        for char in s.chars() {
            if char == temp {
                res[1] += 1;
            } else {
                res[0] += 1;
            }
            temp = match temp {
                '1' => '0',
                _ => '1',
            }
        }
        res[0].min(res[1])
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case_1() {
        let s = "0100".to_string();
        let expected_output = 1;
        assert_eq!(Solution::min_operations(s), expected_output);
    }
    #[test]
    fn test_case_2() {
        let s = "10".to_string();
        let expected_output = 0;
        assert_eq!(Solution::min_operations(s), expected_output);
    }
}

fn main() {}
