pub mod utils;
pub struct Solution;

impl Solution {
    pub fn get_concatenation(nums: Vec<i32>) -> Vec<i32> {
        nums.repeat(2)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case() {
        let n = [1, 2, 3].to_vec();
        let expected_output = [1, 2, 3, 1, 2, 3].to_vec();
        assert_eq!(Solution::get_concatenation(n), expected_output);
    }
}

fn main() {}
