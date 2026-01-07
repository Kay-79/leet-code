pub mod utils;
use std::cell::RefCell;
use std::rc::Rc;
use utils::tree::TreeNode;
pub struct Solution;

impl Solution {
    pub fn max_depth(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut max_lv = 0;
        Self::dfs(&root, 1, &mut max_lv);
        max_lv
    }
    pub fn dfs(node: &Option<Rc<RefCell<TreeNode>>>, lv: i32, max_lv: &mut i32) {
        if let Some(n) = node {
            if lv > *max_lv {
                *max_lv = lv;
            };
            Self::dfs(&n.borrow().left, lv + 1, max_lv);
            Self::dfs(&n.borrow().right, lv + 1, max_lv);
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::tree;

    #[test]
    fn test_case() {
        let root = tree![3, 9, 20, null, null, 15, 7];
        let expected_output = 3;
        assert_eq!(Solution::max_depth(root), expected_output);
    }
}

fn main() {}
