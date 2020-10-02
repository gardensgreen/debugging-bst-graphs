class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // insert(val, root = this.root) {
    //     let newNode = new TreeNode(val);
    //     if (!this.root) {
    //         this.root = newNode;
    //         return;
    //     }
    //     let curr = this.root;
    //     while (curr) {
    //         if (val < curr.val) {
    //             if (curr.left) {
    //                 curr = curr.left;
    //             } else {
    //                 break;
    //             }
    //         } else {
    //             if (curr.right) {
    //                 curr = curr.right;
    //             } else {
    //                 break;
    //             }
    //         }
    //     }
    //     if (val < curr.val) {
    //         curr.left = newNode;
    //     } else {
    //         curr.right = newNode;
    //     }
    // }

    insert(val, root = this.root) {
        let newNode = new TreeNode(val);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        if (val < root.val) {
            if (root.left) {
                this.insert(val, root.left);
            } else {
                root.left = newNode;
            }
        } else {
            if (root.right) {
                this.insert(val, root.right);
            } else {
                root.right = newNode;
            }
        }
    }
    // insert(val, root = this.root) {
    //     let newNode = new TreeNode(val);
    //     if (this.root === null) {
    //         this.root = newNode;
    //         return;
    //     }

    //     let current = this.root;
    //     while (current) {
    //         if (current.left === null && current.right === null) {
    //             if (val < current.val) {
    //                 current.left = newNode;
    //                 return;
    //             } else {
    //                 current.right = newNode;
    //                 return;
    //             }
    //         }

    //         if (val < current.val) {
    //             if (current.left === null) {
    //                 current.left = newNode;
    //                 return;
    //             }
    //             current = current.left;
    //         } else {
    //             if (current.right === null) {
    //                 current.right = newNode;
    //                 return;
    //             }
    //             current = current.right;

    //         }
    //     }
    // }

    searchRecur(val, root = this.root) {
        if (!root) return false;

        if (val < root.val) {
            return this.searchRecur(val, root.left);
        } else {
            return this.searchRecur(val, root.right);
        }
    }

    searchIter(val) {
        while (this.root) {
            if (val === this.root.val) {
                return true;
            } else if (val < this.root.val) {
                this.root = this.root.left;
            } else {
                this.root = this.root.right;
            }
        }
        return false;
    }
}

module.exports = {
    TreeNode,
    BST,
};

// example
let tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(16);
tree.insert(1);
tree.insert(7);
tree.insert(16);

console.log(tree.searchRecur(7)); // should be true
console.log(tree.searchRecur(14)); // should be false

console.log(tree.searchIter(7)); // should be true
console.log(tree.searchIter(14)); // should be false
