fn main() {}
#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_case() {
        let score = [5, 4, 3, 2, 1].to_vec();
        let expected_output = ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"];
        assert_eq!(find_relative_ranks(score), expected_output);
    }
}
pub fn find_relative_ranks(score: Vec<i32>) -> Vec<String> {
    let mut new_arr = score.clone();
    new_arr.sort_by(|a, b| b.cmp(a));
    let mut result = vec!["".to_string(); score.len()];
    for i in 0..score.len() {
        for j in 0..score.len() {
            if new_arr[i] == score[j] {
                result[j] = match i {
                    0 => "Gold Medal".to_string(),
                    1 => "Silver Medal".to_string(),
                    2 => "Bronze Medal".to_string(),
                    _ => (i + 1).to_string(),
                };
                break;
            }
        }
    }
    result
}
