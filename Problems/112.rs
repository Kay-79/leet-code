pub mod utils;
pub struct Solution;
use std::cell::RefCell;
use std::rc::Rc;

use utils::tree::TreeNode;

impl Solution {
    pub fn has_path_sum(root: Option<Rc<RefCell<TreeNode>>>, target_sum: i32) -> bool {
        let mut res = false;
        Self::dfs(&root, 0, target_sum, &mut res);
        res
    }
    pub fn dfs(node: &Option<Rc<RefCell<TreeNode>>>, sum: i32, tagret: i32, res: &mut bool) {
        if let Some(n) = node {
            let new_sum = sum + n.borrow().val;
            if n.borrow().left.is_none() && n.borrow().right.is_none() {
                if new_sum == tagret {
                    *res = true;
                }
                return;
            }
            Self::dfs(&n.borrow().left, new_sum, tagret, res);
            Self::dfs(&n.borrow().right, new_sum, tagret, res);
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case() {
        let root = tree![5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
        let target_sum = 22;
        let expected_output = true;
        assert_eq!(Solution::has_path_sum(root, target_sum), expected_output);
    }
}

fn main() {}
