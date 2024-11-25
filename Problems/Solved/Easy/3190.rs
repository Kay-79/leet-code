pub fn minimum_operations(nums: Vec<i32>) -> i32 {
    let mut result: i32 = nums.len() as i32;
    for num in nums {
        if num % 3 == 0 {
            result -= 1;
        };
    }
    result
}
