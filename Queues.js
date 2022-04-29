// First item inline in the first item to be remove
// First in first out

// Using normal array, only uses (unshift & pop) or (push & shift)

// Using custom class

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.size = 0
        this.first = null
        this.last = null
    }
    enqueue(value) {
        let newNode = new Node(value)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    dequeue() {
        if (!this.first) {
            return null
        }
        let temp = this.first
        if(this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }

}

// BIG O of QUEUE is O(1) searching & access will be O(n)