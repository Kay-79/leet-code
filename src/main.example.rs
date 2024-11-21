fn main() {}
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case() {
        let hours = vec![0, 1, 2, 3, 4];
        let target = 2;
        let expected_output = 3;
        assert_eq!(
            number_of_employees_who_met_target(hours, target),
            expected_output
        );
    }
}

pub fn number_of_employees_who_met_target(hours: Vec<i32>, target: i32) -> i32 {
    let mut l = 0;
    let mut r = hours.len() - 1;
    let mut result = 0;
    while l < r {
        if hours[l] >= target {
            result += 1;
        }
        if hours[r] >= target {
            result += 1;
        }
        l += 1;
        r -= 1;
    }
    if r == l && hours[l] >= target {
        result += 1
    };
    result
}
