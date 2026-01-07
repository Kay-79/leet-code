pub mod utils;
use std::cell::RefCell;
use std::rc::Rc;
use utils::tree::TreeNode;
pub struct Solution;

impl Solution {
    pub fn max_product(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let modulo: i64 = 1_000_000_007;
        let mut sums = Vec::new();
        Self::dfs(&root, &mut sums);
        ((0..sums.len() - 1)
            .map(|i| sums[i] * (sums[sums.len() - 1] - sums[i]))
            .max()
            .unwrap()
            % modulo) as i32
    }
    pub fn dfs(node: &Option<Rc<RefCell<TreeNode>>>, sums: &mut Vec<i64>) -> i64 {
        if let Some(n) = node {
            let sum = n.borrow().val as i64
                + Self::dfs(&n.borrow().left, sums)
                + Self::dfs(&n.borrow().right, sums);
            sums.push(sum);
            sum
        } else {
            0
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::tree;

    #[test]
    fn test_case() {
        let root = tree![1, 2, 3, 4, 5, 6];
        let expected_output = 110;
        assert_eq!(Solution::max_product(root), expected_output);
    }
}

fn main() {}
