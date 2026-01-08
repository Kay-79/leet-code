pub mod utils;
// use std::cell::RefCell;
// use std::rc::Rc;
// use utils::tree::TreeNode;
pub struct Solution;

impl Solution {
    pub fn score_of_string(s: String) -> i32 {
        let mut score = 0;
        for w in s.as_bytes().windows(2) {
            let diff = (w[0] as i32 - w[1] as i32).abs();
            score += diff;
        }
        score
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    // use crate::tree;

    #[test]
    fn test_case() {
        let s = "zaz".to_string();
        let expected_output = 50;
        assert_eq!(Solution::score_of_string(s), expected_output);
    }
}

fn main() {}
