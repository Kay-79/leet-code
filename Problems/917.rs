fn main() {}
#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_case() {
        let s = "a-bC-dEf-ghIj";
        let expected_output = "j-Ih-gfE-dCba";
        assert_eq!(reverse_only_letters(s.to_string()), expected_output);
    }
}

pub fn reverse_only_letters(mut s: String) -> String {
    let arr = unsafe { s.as_bytes_mut() };
    let (mut l, mut r) = (0, arr.len() - 1);
    while l < r {
        while l < r && !arr[l].is_ascii_alphabetic() {
            l += 1;
        }
        while l < r && !arr[r].is_ascii_alphabetic() {
            r -= 1;
        }
        arr.swap(l, r);
        l += 1;
        r -= 1;
    }
    s
}
