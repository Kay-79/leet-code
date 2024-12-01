fn main() {}
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case() {
        assert_eq!(check_if_exist([10, 2, 5, 3].to_vec()), true);
    }
}

pub fn check_if_exist(arr: Vec<i32>) -> bool {
    let mut arr = arr;
    let mut z = false;
    let mut i = 0;
    while i < arr.len() {
        if arr.contains(&(arr[i] * 2)) {
            if arr[i] == 0 && !z {
                z = true;
                arr.remove(i);
                continue;
            }
            return true;
        }
        i += 1;
    }
    false
}
