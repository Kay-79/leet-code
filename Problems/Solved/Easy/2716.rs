fn main() {}
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case() {
        let s = "baadccab".to_string();
        let expected_output = 4;

        assert_eq!(minimized_string_length(s), expected_output);
    }
}

pub fn minimized_string_length(s: String) -> i32 {
    let mut result = 0;
    let mut caches: Vec<char> = Vec::new();
    for c in s.chars() {
        if !caches.contains(&c) {
            result += 1;
            caches.push(c);
        }
    }
    result
}
