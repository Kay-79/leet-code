pub struct Solution;
use std::collections::HashSet;

impl Solution {
    pub fn find_different_binary_string(nums: Vec<String>) -> String {
        let mut numbers: HashSet<i32> = HashSet::new();
        let len = nums.len();
        for n in nums.clone() {
            numbers.insert(u32::from_str_radix(&n, 2).expect("fail") as i32);
        }
        for n in &numbers {
            if !numbers.contains(&(n - 1)) {
                if n.to_owned() != 0 {
                    return format!("{:0>width$b}", n - 1, width = len);
                };
            }
            if !numbers.contains(&(n + 1)) {
                if (2_i32).pow(len as u32) - 1 >= (n + 1) {
                    return format!("{:0>width$b}", n + 1, width = len);
                };
            }
        }
        "".to_owned()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case_1() {
        let nums = ["01".to_string(), "10".to_string()].to_vec();
        let expected_output = "11".to_string();
        assert_eq!(
            Solution::find_different_binary_string(nums),
            expected_output
        );
    }
}

fn main() {}
