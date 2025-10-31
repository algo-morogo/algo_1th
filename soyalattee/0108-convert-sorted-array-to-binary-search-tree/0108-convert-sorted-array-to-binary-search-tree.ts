/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {

    function buildTree(left,right):TreeNode | null {

        if(left>right) return null;

        const mid = Math.floor((left+right)/2);

        const leftNode = buildTree(left,mid-1);
        const rightNode = buildTree(mid+1,right);

        const root = new TreeNode(nums[mid],leftNode ,rightNode)

        return root;
    }

    return buildTree(0, nums.length-1);
};