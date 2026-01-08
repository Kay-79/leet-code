use std::collections::HashMap;

pub mod utils;
pub struct Solution;

impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        let mut map = HashMap::new();
        s.chars().for_each(|c| *map.entry(c).or_insert(0) += 1);
        t.chars().for_each(|c| *map.entry(c).or_insert(0) -= 1);
        map.into_values().all(|v| v == 0)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case() {
        let s = "anagram".to_string();
        let t = "nagaram".to_string();
        let expected_output = true;
        assert_eq!(Solution::is_anagram(s, t), expected_output);
    }
}

fn main() {}
