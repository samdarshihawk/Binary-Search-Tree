"use strict";
const binaryTree = require("./bst.js");
const Node = require("./node.js");


var BST = new binaryTree(15);
BST.insertBST(25);
BST.insertBST(10);
BST.insertBST(7);
BST.insertBST(22);
BST.insertBST(17);
BST.insertBST(13);
BST.insertBST(5);
BST.insertBST(9);
BST.insertBST(27);
var rootnode = BST.getRootNode();
BST.inorder(rootnode);
BST.FindminNode(rootnode);
