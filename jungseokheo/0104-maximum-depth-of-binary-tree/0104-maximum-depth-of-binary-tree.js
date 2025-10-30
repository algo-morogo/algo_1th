/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root) {
    // root === null
    if (root === null) {
        return 0;
    }
    
    const lDepth = maxDepth(root.left);
    const rDepth = maxDepth(root.right);

    return Math.max(lDepth, rDepth) + 1;

};