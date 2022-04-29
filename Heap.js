// BinaryHeap is very similar  to a BST but with different rules
// MaxBH is where the parent nodes are always larger than the child nodes
// MinBH is the opposite of the MaxBH
// For any index of an array n
// Left child is stored at 2n + 1
// Right child is stored at 2n + 2
// It's parent is  at index (n - 1)/2 Floor!

class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}

class MaxMinQHeap {
    constructor(heapType){
        this.values = [];
        this.heapType = heapType
    }
    enqueue(data){
        if (this.heapType === 'priorityQ') {
            let newNode = new Node(data.value, data.priority)
        } else {
            this.values.push(value); 
        }
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        // Because the value is pushed at the end of the array, so it's index is array.length - 1
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];

            if (this.heapType === 'maxQ') {
                if(element.priority <= parent.priority) break;
            }
            if (this.heapType === 'minQ') {
                if(element.priority >= parent.priority) break;
            }
            if (this.heapType === 'max') {
                if(element <= parent) break;
            }
            if (this.heapType === 'min') {
                if(element >= parent) break;
            }
            
            // If the current element > parent swap the parent with the element
            this.values[parentIdx] = element;
            // Switch the last element place with the parent
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    bubbleDown() {
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        while(true) {
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChild
            let swap = null
            
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]

                if (this.heapType === 'max') {
                    if (leftChild > element) {
                        swap = leftChildIdx
                    }
                }
                if (this.heapType === 'min') {
                    if (leftChild < element) {
                        swap = leftChildIdx
                    }
                }
                if (this.heapType === 'maxQ') {
                    if (leftChild.priority > element.priority) {
                        swap = leftChildIdx
                    }
                }
                if (this.heapType === 'minQ') {
                    if (leftChild.priority < element.priority) {
                        swap = leftChildIdx
                    }
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIdx
                }
                if (this.heapType === 'max') {
                    if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                        swap = rightChildIdx
                    }
                }
                if (this.heapType === 'min') {
                    if ((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild)) {
                        swap = rightChildIdx
                    }
                }
                if (this.heapType === 'maxQ') {
                    if ((swap === null && rightChild.priority > element.priority) || (swap !== null && rightChild.priority > leftChild.priority)) {
                        swap = rightChildIdx
                    }
                }
                if (this.heapType === 'minQ') {
                    if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
                        swap = rightChildIdx
                    }
                }
            }

            if (swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }
    dequeue() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
        
            this.bubbleDown()
        }
        return max
    }
}


class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(value, priority){
        let newNode = new Node(value, priority)
        this.values.push(newNode); 
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        // Because the value is pushed at the end of the array, so it's index is array.length - 1
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority <= parent.priority) break;
            // If the current element > parent swap the parent with the element
            this.values[parentIdx] = element;
            // Switch the last element place with the parent
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    bubbleDown() {
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        while(true) {
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChild
            let swap = null
            
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if (leftChild > element) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIdx
                }
            }

            if (swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }
    dequeue() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = end
        
            this.bubbleDown()
        }
        return max
    }
}




let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)

// MaxMinQHeap

let MinHeapWithQ = new MaxMinQHeap('minQ')
let MaxHeapWithQ = new MaxMinQHeap('maxQ')
let MinBH = new MaxMinQHeap('min')
let MaxBH = new MaxMinQHeap('max')


