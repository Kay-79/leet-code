use std::collections::HashMap;

pub mod utils;
pub struct Solution;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map = HashMap::new();
        for i in 0..nums.len() {
            let need = target - nums[i];
            if let Some(&index) = map.get(&need) {
                return [index as i32, i as i32].to_vec();
            }
            map.insert(nums[i], i);
        }
        [].to_vec()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case() {
        let nums = [2, 7, 11, 15].to_vec();
        let target = 9;
        let expected_output = [0, 1].to_vec();
        assert_eq!(Solution::two_sum(nums, target), expected_output);
    }
}

fn main() {}
