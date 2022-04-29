// Count unique value
// Ex: [1,2,3,4,4,5,5] = 5 unique numbers


// Regular solution

const countUniqueNumbers = (arr) => {
    
    var i = 0
    var j = 0
    if (arr.length == 0) {
        return 0
    }
    while(j < arr.length+1) {
        let pointer1 = arr[i]
        let pointer2 = arr[j]
        if (pointer1 === pointer2) {
            j++
        }
        if (pointer1 !== pointer2) {

            i++
            arr[i] = arr[j]
        }
    }
    return i
}

console.log(countUniqueNumbers([1,2,3,3,3,3,3,4,4,4,5,5,5,6,6,6,6]))
