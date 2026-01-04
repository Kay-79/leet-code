pub struct Solution;

impl Solution {
    pub fn sum_four_divisors(nums: Vec<i32>) -> i32 {
        let mut res = 0;
        for n in nums {
            let mut divisors = 0;
            let mut total = 0;
            let limit = (n as f64).sqrt() as i32;
            for i in 1..=limit {
                if n % i == 0 {
                    if i * i == n {
                        divisors += 1;
                        total += i;
                    } else {
                        divisors += 2;
                        total += i + (n / i);
                    }
                }
            }
            if divisors == 4 {
                res += total;
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
        let nums = [21, 4, 7].to_vec();
        let expected_output = 32;
        assert_eq!(Solution::sum_four_divisors(nums), expected_output);
    }

    #[test]
    fn test_case_2() {
        let nums = [21, 21].to_vec();
        let expected_output = 64;
        assert_eq!(Solution::sum_four_divisors(nums), expected_output);
    }

    #[test]
    fn test_case_3() {
        let nums = [1, 2, 3, 4, 5].to_vec();
        let expected_output = 0;
        assert_eq!(Solution::sum_four_divisors(nums), expected_output);
    }
}

fn main() {}
