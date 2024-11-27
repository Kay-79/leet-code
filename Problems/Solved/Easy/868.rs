fn main() {}
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case() {
        assert_eq!(binary_gap(22), 2);
    }
}

pub fn binary_gap(n: i32) -> i32 {
    let bin = format!("{:b}", n);
    let mut result = 0;
    let mut last_index = None;
    for (i, c) in bin.chars().enumerate() {
        if c == '1' {
            if let Some(last) = last_index {
                result = result.max(i - last);
            }
            last_index = Some(i);
        }
    }
    result as i32
}
