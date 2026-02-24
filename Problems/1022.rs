pub struct Solution;
pub mod utils;

use std::cell::RefCell;
use std::rc::Rc;

use crate::utils::tree::TreeNode;
impl Solution {
    pub fn sum_root_to_leaf(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        Self::dfs(&root, 0)
    }
    pub fn dfs(node: &Option<Rc<RefCell<TreeNode>>>, sum: i32) -> i32 {
        if let Some(n) = node {
            let n_borrow = n.borrow();
            let next_val = (sum << 1) | n_borrow.val;
            if n_borrow.left.is_none() && n_borrow.right.is_none() {
                return next_val;
            }
            return Self::dfs(&n_borrow.left, next_val) + Self::dfs(&n_borrow.right, next_val);
        }
        0
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::tree;

    #[test]
    fn test_case_1() {
        let root = tree![1, 0, 1, 0, 1, 0, 1];
        let expected_output = 22;
        assert_eq!(Solution::sum_root_to_leaf(root), expected_output);
    }
}

fn main() {}
