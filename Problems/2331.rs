pub mod utils;
use std::cell::RefCell;
use std::rc::Rc;
use utils::tree::TreeNode;
pub struct Solution;

impl Solution {
    pub fn evaluate_tree(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        return Self::dfs(&root);
    }
    pub fn dfs(node: &Option<Rc<RefCell<TreeNode>>>) -> bool {
        if let Some(n) = node {
            let n_ref = n.as_ref().borrow();
            return match n_ref.val {
                0 => false,
                1 => true,
                2 => Self::dfs(&n_ref.right) || Self::dfs(&n_ref.left),
                _ => Self::dfs(&n_ref.right) && Self::dfs(&n_ref.left),
            };
        }
        true
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::tree;

    #[test]
    fn test_case() {
        let root = tree![2, 1, 3, null, null, 0, 1];
        let expected_output = true;
        assert_eq!(Solution::evaluate_tree(root), expected_output);
    }
}

fn main() {}
