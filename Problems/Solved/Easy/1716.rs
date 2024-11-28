fn main() {}
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case() {
        assert_eq!(total_money(10), 37);
    }
}

pub fn total_money(n: i32) -> i32 {
    let mut result = 0;
    let mut w = 0;
    let mut d = 0;
    for i in 1..=n {
        result += w + d + 1;
        d += 1;
        if i % 7 == 0 {
            w += 1;
            d = 0;
        }
    }
    result
}
