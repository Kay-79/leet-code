pub mod utils;
use std::cell::RefCell;
use std::rc::Rc;
use utils::tree::TreeNode;
pub struct Solution;

impl Solution {
    pub fn subtree_with_all_deepest(
        root: Option<Rc<RefCell<TreeNode>>>,
    ) -> Option<Rc<RefCell<TreeNode>>> {
        Self::dfs(&root).1
    }
    pub fn dfs(node: &Option<Rc<RefCell<TreeNode>>>) -> (i32, Option<Rc<RefCell<TreeNode>>>) {
        match node {
            None => (0, None),
            Some(n) => {
                let n_ref = n.borrow();
                let (r_deepth, r_ref) = Self::dfs(&n_ref.left);
                let (l_deepth, l_ref) = Self::dfs(&n_ref.right);
                if r_deepth > l_deepth {
                    return (r_deepth + 1, r_ref);
                } else if r_deepth < l_deepth {
                    return (l_deepth + 1, l_ref);
                }
                return (l_deepth + 1, node.clone());
            }
        }
    }
}
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_case() {
        let root = tree![3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
        let expected_output = tree![2, 7, 4];
        assert_eq!(Solution::subtree_with_all_deepest(root), expected_output);
    }
}

fn main() {}
