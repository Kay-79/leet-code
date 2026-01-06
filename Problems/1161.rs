pub mod utils;
use std::cell::RefCell;
use std::rc::Rc;
use utils::tree::TreeNode;
pub struct Solution;

impl Solution {
    pub fn max_level_sum(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut sums: Vec<i32> = Vec::new();
        Self::dfs(&root, 0, &mut sums);
        let mut max_sum = i32::MIN;
        let mut res = 0;
        for (i, &sum) in sums.iter().enumerate() {
            if max_sum < sum {
                max_sum = sum;
                res = i + 1;
            }
        }
        res as i32
    }
    pub fn dfs(node: &Option<Rc<RefCell<TreeNode>>>, lv: usize, sums: &mut Vec<i32>) {
        if let Some(n) = node {
            let n_borrow = n.as_ref().borrow();
            if sums.len() == lv {
                sums.push(0);
            }
            sums[lv] += n_borrow.val;
            Self::dfs(&n_borrow.left, lv + 1, sums);
            Self::dfs(&n_borrow.right, lv + 1, sums);
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::tree;

    #[test]
    fn test_case() {
        let root = tree![989, null, 10250, 98693, -89388, null, null, null, -32127];
        let expected_output = 2;
        assert_eq!(Solution::max_level_sum(root), expected_output);
    }
}

fn main() {}
