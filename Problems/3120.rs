pub struct Solution;

impl Solution {
    pub fn number_of_special_chars(word: String) -> i32 {
        let mut res = 0;
        for i in 65..=90 {
            let char_upper = (i as u8) as char;
            let char_lower = ((i + 32) as u8) as char;
            if word.contains(char_upper) && word.contains(char_lower) {
                res += 1;
            }
        }
        res
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case_1() {
        let word = String::from("aaAbcBC");
        let expected_output = 3;

        assert_eq!(Solution::number_of_special_chars(word), expected_output);
    }

    #[test]
    fn test_case_2() {
        let word = String::from("abc");
        let expected_output = 0;
        assert_eq!(Solution::number_of_special_chars(word), expected_output);
    }
}

fn main() {}
