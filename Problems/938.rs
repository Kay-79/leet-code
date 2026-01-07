pub mod utils;
use std::cell::RefCell;
use std::rc::Rc;
use utils::tree::TreeNode;
pub struct Solution;

impl Solution {
    pub fn range_sum_bst(root: Option<Rc<RefCell<TreeNode>>>, low: i32, high: i32) -> i32 {
        fn dfs(node: &Option<Rc<RefCell<TreeNode>>>, sum: &mut i32, low: i32, high: i32) {
            if let Some(n) = node {
                let n_ref = n.borrow();
                if n_ref.val >= low && n_ref.val <= high {
                    *sum += n_ref.val;
                }
                dfs(&n_ref.left, sum, low, high);
                dfs(&n_ref.right, sum, low, high);
            }
        }
        let mut sum = 0;
        dfs(&root, &mut sum, low, high);
        sum
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::tree;

    #[test]
    fn test_case() {
        let root = tree![10, 5, 15, 3, 7, 13, 18, 1, null, 6];
        let low = 6;
        let high = 10;
        let expected_output = 23;
        assert_eq!(Solution::range_sum_bst(root, low, high), expected_output);
    }
}

fn main() {}
