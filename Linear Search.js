// Linear search has a time complexity of O(n)
// Just like, indexOf, find, findIndexOf

const iOf = (array, value) => {
    for (let i in array) {
        if (array[i] == value) {
            return i
        }
    }
    return -1
}
