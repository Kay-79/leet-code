pub struct Solution;

impl Solution {
    pub fn sum_and_multiply(n: i32) -> i64 {
        let mut sum = 0;
        let mut x = 0;
        let n_s = n.to_string();
        for s in n_s.chars() {
            let num = s.to_digit(10).expect("Err") as i64;
            if num > 0 {
                sum += num;
                x = x * 10 + num;
            }
        }
        sum * x
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case_1() {
        let n = 10203004;
        let expected_output = 12340;
        assert_eq!(Solution::sum_and_multiply(n), expected_output);
    }
}

fn main() {}
