fn main() {}
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case() {
        assert_eq!(final_prices([8, 4, 6, 2, 3].to_vec()), [4, 2, 4, 2, 3]);
    }
}

pub fn final_prices(prices: Vec<i32>) -> Vec<i32> {
    let mut result = prices.clone();
    for i in 0..result.len() {
        for j in (i + 1)..result.len() {
            if result[j] <= result[i] {
                result[i] = result[i] - result[j];
                break;
            }
        }
    }
    result
}
