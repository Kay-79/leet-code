pub struct Solution;

impl Solution {
    pub fn count_triples(n: i32) -> i32 {
        if n < 5 {
            return 0;
        }
        let mut res = 0;
        for i in 3..=n - 2 {
            for j in (i + 1)..=n - 1 {
                let sq = i * i + j * j;
                if sq > n * n {
                    break;
                }
                let root = (sq as f64).sqrt();
                if root - root.floor() == 0.0 {
                    res += 2;
                }
            }
        }
        res
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case() {
        let n = 10;
        let expected_output = 4;
        assert_eq!(Solution::count_triples(n), expected_output);
    }
}

fn main() {}
