use std::collections::HashSet;

pub mod utils;
pub struct Solution;

impl Solution {
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        nums.len() != HashSet::<i32>::from_iter(nums.into_iter()).len()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case() {
        let n = [1, 2, 3, 1].to_vec();
        let expected_output = true;
        assert_eq!(Solution::contains_duplicate(n), expected_output);
    }
}

fn main() {}
