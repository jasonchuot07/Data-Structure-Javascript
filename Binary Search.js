// Which create 2 pointer at the start and end of the array
// Then create a pointer at the middle, if you find the value, return the index
// If the value is too small, then move the left pointer up to the middle pointer
// If the value is too big, move the left pointer down, up to the middle pointer
// If the value is never found, return -1

const binarySearch = (array, value) => {
    let start = 0
    let end = array.length - 1
    let middle = Math.floor((start + end) /2)
    while (array[middle] !== value && start <= end) {
        if (value < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) /2)
    }
    return array[middle] === value ? middle : -1
}

binarySearch([1,2,3,4,5,6,7,8,9,10], 50)