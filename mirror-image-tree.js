// PROBLEM: Check if a binary tree is a mirror image of another binary tree.
// TEST CASE ---> RETURNS TRUE
//  TREE ONE             TREE TWO
//       7                     7
//     /   \                 /   \
//   2       4             4       2
//    \                          /
//     3                        3
// Approach:
// Do the preorder traversal on both the trees simultaneously.
// if any node doesn’t have corresponding node in the another tree, return false.
// check if left node in one tree is the right node in another tree, and vice verse.
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor(val) {
        this.root = new TreeNode(val);
    }
}
function checkMirrorTree(treeOne, treeTwo) {
    // Evaluates to true only on the first call
    if (treeOne instanceof BST) treeOne = treeOne.root;
    if (treeTwo instanceof BST) treeTwo = treeTwo.root;

    // Check if the tree is empty
    if (treeOne === null && treeTwo === null) return true;

    // Check if the  values of mirrored nodes are equal
    if (treeOne.val !== treeTwo.val) return false;

    // if any node doesn't
    // have corresponding node in the another tree, return false
    if ((treeOne === null && treeTwo !== null)
        || (treeOne !== null && treeTwo === null)) {
        return false;
    }
    // check if left node in one tree is the right node in another tree, and
    // vice versa
    return checkMirrorTree(treeOne.left, treeTwo.right)
        && checkMirrorTree(treeOne.right, treeTwo.left);

}

let treeOne = new BST(7); // Setting up the root of first tree to be 7
treeOne.left = new TreeNode(2);
treeOne.left.right = new TreeNode(3);
treeOne.right = new TreeNode(4);

let treeTwo = new BST(7); // // Setting up the root of second tree to be 7
treeTwo.right = new TreeNode(2);
treeTwo.right.left = new TreeNode(3);
treeTwo.left = new TreeNode(4);

console.log(checkMirrorTree(treeOne, treeTwo));

// -------------BIG O -----------
// Operations in each individual node of the tree has a finite number
// of operations
// Time ---> O(n), linear
// Space ----> O(n), linear

