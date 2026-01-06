pub mod utils;
use std::borrow::Borrow;
use std::cell::RefCell;
use std::rc::Rc;
use utils::tree::TreeNode;
pub struct Solution;

impl Solution {
    pub fn is_same_tree(
        p: Option<Rc<RefCell<TreeNode>>>,
        q: Option<Rc<RefCell<TreeNode>>>,
    ) -> bool {
        q == p
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::tree;

    #[test]
    fn test_case() {
        let root1 = tree![1, 2];
        let root2 = tree![1, null, 2];
        let expected_output = true;
        assert_eq!(Solution::is_same_tree(root1, root2), expected_output);
    }
}

fn main() {}
