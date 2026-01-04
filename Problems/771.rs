fn main() {}
#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_case() {
        let jewels = "z".to_string();
        let stones = "ZZ".to_string();
        let expected_output = 0;
        assert_eq!(num_jewels_in_stones(jewels, stones), expected_output);
    }
}

pub fn num_jewels_in_stones(jewels: String, stones: String) -> i32 {
    let mut result = 0;
    for stone in stones.chars() {
        if jewels.contains(stone) {
            result += 1;
        }
    }
    result
}
