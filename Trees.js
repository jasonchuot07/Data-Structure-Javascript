// Trees
// Binary trees
// Binary search trees

// Tree is a data structure that consists of nodes with child/parent relationship
// Trees is are not linear which is trees are multi branch while arrays are single branch
// Root is one top node of the tree, can't be multi roots
// Child - A node directly connected to another node moving away from the Root
// Siblings - Group of nodes with same parent
// Leaf - is a node with no children ( last items on the tree )
// Edge - Connection between nodes

// HTML model is a tree model
// Others are network routing, abstract syntax tree, artificial intelligence

// Binary trees are trees which can only be 2 children for each node, even the Root
// The node with smaller value compare to parent is on  the left, larger  than the parent is on the right


// Binary Search Tree

class Node {
    constructor (value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null
    }
    insert(value) {
        let newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this
        } else {
            let current = this.root
            while(true) {
                if (value === current.value) {
                    return undefined
                }
                if (value < current.value) {
                    if (!current.left) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
            
                } else {
                    if (!current.right) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.left
                    }
                }
            }
        }
    }
    find(value) {
        if (!this.root) return false 
        let current = this.root, found = false
        while (current && !found) {
            if (value < current.value) {
                current = current.left
            }
            else if (value > current.value) {
                current = current.right
            } else {
                found = true
            }
        }
        if (!found) return false
        return current
    }
    BFS() {
        let data = [], queue = [], node = this.root
        queue.push(this.root)
        while(queue/length) {
            node = queue.shift()
            data.push(node.value)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data
    }
    DFS_Pre() {
        let data = [], current = this.root
        function traverse (node) {
            data.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(current)
        return data   
    }
    DFS_Post() {
        let data = [], current = this.root
        function traverse (node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(current)
        return data   
    }
    DFS_InOrder() {
       let data = [], current = this.root
        function traverse (node) {
            if (node.left) traverse(node.left)
            data.push(node.value)
            if (node.right) traverse(node.right)
        }
        traverse(current)
        return data   
    }
}

let tree = new BinarySearchTree
tree.insert(10)
tree.insert(30)
tree.insert(5)
tree.insert(60)
tree.insert(1)
tree.insert(7)


// Big O of Insert & Search is O(log n)

// Traversing tree, two ways : Breadth-first search or Depth-first search

// BFS - Create a queue and a variable to  store the values of nodes visited

