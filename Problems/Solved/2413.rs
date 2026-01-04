fn main() {}
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case() {
        let n = 5;
        let expected_output = 10;
        assert_eq!(smallest_even_multiple(n), expected_output);
    }
}

pub fn smallest_even_multiple(n: i32) -> i32 {
    if n % 2 == 1 {
        return n * 2;
    }
    n
}
