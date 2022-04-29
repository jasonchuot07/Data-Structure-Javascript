 // 

 class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DLL {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(value) {
        let newNode = newNode(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) {
            return undefined
        }
        let currentTail = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            
            this.tail = currentTail.prev
            this.tail.next = null
            currentTail.prev = null
        }
        this.length--
        return currentTail
    }
    shift() {
        if (!this.head) {
            return undefined
        }
        let currentHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = currentHead.next
            this.head.prev = null
            currentHead.next = null
        }
        this.length--
        return currentHead
    }
    unshift(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode 
        }
        this.length++
        return this
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        } 
        if (index <= this.length/2) {
            let count = 0
            let current = this.head
            while (count !== index) {
                current = current.next
                count++
            }
            return current
        } else {
            let count = this.length -1 
            let current = this.tail
            while(count !== index) {
                current = current.prev
                count--
            }
            return current
        } 
    }
    set(index, value) {
        let foundNode = this.get(index)
        if (!foundNode) {
            foundNode.value = value
            return true
        }
        return false
    }
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            return null 
        }
        if (index === 0) {
            return this.unshift(value)
        }
        if (index === this.length) {
            return this.push(value)
        }
        let newNode = newNode(value)
        let prevNode = this.get(index-1)
        let afterNode = prevNode.next
        prevNode.next = newNode
        newNode.prev = prevNode
        newNode.next = afterNode
        afterNode.prev = newNode
        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return null 
        }
        if (index === 0) return this.shift()
        if (index === this.length -1) return this.pop()
        let removeNode = this.get(index)
        removeNode.prev.next = removeNode.next
        removeNode.next.prev = removeNode.prev
        removeNode.next = null
        removeNode.prev = null
        this.length--
        return removeNode
    }
}


// Insertion O(1)
// Removal O(1)
// Searching O(n)
// Access O(n)