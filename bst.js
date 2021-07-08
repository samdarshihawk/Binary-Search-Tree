"use strict";
const Node = require("./node.js");

module.exports = class binaryTree{
    constructor(rootval){
        this.tree = new Node(rootval);
    }

    getRootNode(){
        return this.tree;
    }

    insert(currentNode, value){
        if(currentNode === null){
            currentNode = new Node(value);
        }else if(value < currentNode.data){
            currentNode.left = this.insert(currentNode.left, value);
        }else{
            currentNode.right = this.insert(currentNode.right, value);
        }
        return currentNode;
    }

    insertBST(value){
        if(this.tree == null){
            this.tree = new Node(value);
            return;
        }else{
            this.insert(this.tree, value);
        }
    }

    Remove(currentNode, value){
        if(currentNode === null){
            return node;
        }else if(currentNode.data > value){
            currentNode.left = this.Remove(currentNode.left, value);
            return currentNode;
        }else if(currentNode.data < value){
            currentNode.right = this.Remove(currentNode.right, value);
            return currentNode;
        }else{
            if(currentNode.left === null && currentNode.right === null){
                currentNode = null;
                return currentNode;
            }else if(currentNode.left === null && currentNode.right !== null){
                currentNode = currentNode.right;
                return currentNode;
            }else if(currentNode.left !== null && currentNode.right === null){
                currentNode = currentNode.left;
                return currentNode;
            }else{
                var minval = this.FindminNode(currentNode.right); // or Findmax value in left subtree
                currentNode.data = minval.data;
                currentNode.right = this.Remove(currentNode.right, minval.data);
                return currentNode; 
            }
        }
    }

    Remove(value){
            
        this.tree = this.Remove(this.tree, value);
            
    }

    inorder(currentNode){
       if(currentNode !== null){
           this.inorder(currentNode.left);
           console.log(currentNode.data);
           this.inorder(currentNode.right);
       }
    }

    preorder(currentNode){
        if(currentNode !== null){
            console.log(currentNode.data);
            
            if(currentNode.left !== null){
                this.preorder(currentNode.left);
            }
            if(currentNode.right !== null){
                this.preorder(currentNode.right);
            }
        }
    }

    postorder(currentNode){
        if(currentNode !== null){
            
            this.postorder(currentNode.left);
           
            this.postorder(currentNode.right)
           
            console.log(currentNode.data);
            
        }
    }

    FindminNode(RootNode){

        if(RootNode === null){
            return null;
        }else if(RootNode.left == null){
            console.log(RootNode.data);
        }else {
             return this.FindminNode(RootNode.left);
        }
    }

    Search(currentNode, data){
        if(currentNode === null){
            return null;
        }else if(currentNode.data < data){
            return this.Search(currentNode.right, data);
        }else if(currentNode.data > data){
            return this.Search(currentNode.left, data);
        }else{
            return currentNode;
        }
    }
    
    
    
}

