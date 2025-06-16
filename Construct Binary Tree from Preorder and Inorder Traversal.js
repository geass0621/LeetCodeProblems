// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.



//   Example 1:


// Input: preorder = [3, 9, 20, 15, 7], inorder = [3, 9, 20, 15, 7]
// Output: [3, 9, 20, null, null, 15, 7]
// Example 2:

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]


// Constraints:

// 1 <= preorder.length <= 3000
// inorder.length == preorder.length
//   - 3000 <= preorder[i], inorder[i] <= 3000
// preorder and inorder consist of unique values.
// Each value of inorder also appears in preorder.
// preorder is guaranteed to be the preorder traversal of the tree.
// inorder is guaranteed to be the inorder traversal of the tree.



//Definition for a binary tree node.

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null;

  // Build a hashmap to store value -> index relations for inorder
  const inorderMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }

  let preorderIndex = 0;

  function helper(left, right) {
    if (left > right) return null;
    // Pick up preorderIndex element as a root
    const rootVal = preorder[preorderIndex++];
    const root = new TreeNode(rootVal);
    // Build left and right subtree
    // Exclude inorderMap.get(rootVal) element because it's the root
    root.left = helper(left, inorderMap.get(rootVal) - 1);
    root.right = helper(inorderMap.get(rootVal) + 1, right);
    return root;
  }

  return helper(0, inorder.length - 1);
};

console.log(buildTree([3, 9, 20, 15, 7], [3, 9, 20, 15, 7]))