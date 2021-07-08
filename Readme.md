# Binary Search Tree (JavaScript)

A Binary Search tree is a binary tree in which nodes that have lesser value are stored on the left while the nodes with a higher value are stored at the right.

A framework of a Binary Search tree class, which contains a private variable root which holds the root of a tree, it is initialized to null.
Implemented the following Functions function:

insert(data) – It creates a new node with a value data, if the tree is empty it add this node to a tree and make it a root, otherwise it calls insert(node, data).

insert(node, data) – It compares the given data with the data of the current node and moves left or right accordingly and recur until it finds a correct node with a null value where new node can be added.

remove(data) – It is helper methods which call removeNode by passing root node and given data and updates the root of the tree with the value returned by the function
removeNode(node, data) – It searches for a node with a given data and then perform certain steps to delete it.

getRootNode() – It returns the root node of a tree.

findMinNode(node) – It searches for a node with a minimum value starting from node.

search(data) – It searches the node with a value data in the entire tree.
Now Functions for Tree Traversal:

inorder(node)
preorder(node)
postorder(node)
