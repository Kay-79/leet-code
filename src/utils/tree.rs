use std::cell::RefCell;
use std::collections::VecDeque;
use std::rc::Rc;

#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

pub fn to_tree(vec: Vec<Option<i32>>) -> Option<Rc<RefCell<TreeNode>>> {
    if vec.is_empty() || vec[0].is_none() {
        return None;
    }

    let root = Rc::new(RefCell::new(TreeNode::new(vec[0].unwrap())));
    let mut queue = VecDeque::new();
    queue.push_back(Rc::clone(&root));

    let mut i = 1;
    while i < vec.len() {
        if let Some(node) = queue.pop_front() {
            if i < vec.len() {
                if let Some(val) = vec[i] {
                    let left_node = Rc::new(RefCell::new(TreeNode::new(val)));
                    node.borrow_mut().left = Some(Rc::clone(&left_node));
                    queue.push_back(left_node);
                }
                i += 1;
            }

            if i < vec.len() {
                if let Some(val) = vec[i] {
                    let right_node = Rc::new(RefCell::new(TreeNode::new(val)));
                    node.borrow_mut().right = Some(Rc::clone(&right_node));
                    queue.push_back(right_node);
                }
                i += 1;
            }
        }
    }
    Some(root)
}

#[macro_export]
macro_rules! tree {
    (@process $vec:ident) => {};

    (@process $vec:ident null, $($rest:tt)*) => {
        $vec.push(None);
        $crate::tree!(@process $vec $($rest)*);
    };
    (@process $vec:ident null) => {
        $vec.push(None);
    };

    (@process $vec:ident -$val:literal, $($rest:tt)*) => {
        $vec.push(Some(-$val));
        $crate::tree!(@process $vec $($rest)*);
    };
    (@process $vec:ident -$val:literal) => {
        $vec.push(Some(-$val));
    };

    (@process $vec:ident $val:literal, $($rest:tt)*) => {
        $vec.push(Some($val));
        $crate::tree!(@process $vec $($rest)*);
    };
    (@process $vec:ident $val:literal) => {
        $vec.push(Some($val));
    };

    ($($rest:tt)*) => {
        {
            let mut vec = Vec::new();
            $crate::tree!(@process vec $($rest)*);
            $crate::utils::tree::to_tree(vec)
        }
    };
}
