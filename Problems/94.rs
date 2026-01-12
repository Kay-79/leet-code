pub mod utils;
pub struct Solution;
use std::cell::RefCell;
use std::rc::Rc;

use utils::tree::TreeNode;

impl Solution {
    pub fn inorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
        let mut res = Vec::new();
        Self::dfs(&root, &mut res);
        res
    }
    pub fn dfs(node: &Option<Rc<RefCell<TreeNode>>>, res: &mut Vec<i32>) {
        if let Some(n) = node {
            let n_borrow = n.borrow();
            Self::dfs(&n_borrow.left, res);
            res.push(n_borrow.val);
            Self::dfs(&n_borrow.right, res);
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case() {
        let root = tree![1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
        let expected_output = [4, 2, 6, 5, 7, 1, 3, 9, 8].to_vec();
        assert_eq!(Solution::inorder_traversal(root), expected_output);
    }
}

fn main() {}
