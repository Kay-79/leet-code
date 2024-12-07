fn main() {}
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case() {
        assert_eq!(sum_of_multiples(7), 21);
    }
}

pub fn sum_of_multiples(n: i32) -> i32 {
    let mut result = 0;
    for i in 1..(n + 1) {
        if (i % 3 == 0) || (i % 5 == 0) || (i % 7 == 0) {
            result += i;
            continue;
        }
    }
    result
}
