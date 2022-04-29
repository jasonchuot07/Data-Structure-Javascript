// Normal solution
// Requirement: Given a SORTED array of integers, returns the first pair of number with the sum of 0
// Ex: array = [-3, -2, -1, 0, 2, 4, 10] returns [-3,3]

// The normal solution
const find1stSum = (array) => {
    for (let i1 = 0; i1 < array.length; i1++) {
        for (let i2 = i1 + 1; i2 < array.length; i2++) {
            if(array[i1] + array[i2] == 0) {
                return [array[i1], array[i2]]
            }
        }
    }
}

console.log(find1stSum([-5, -3, -1, 0, 1, 4, 6,7])) // O(n^2) time complexity


// Better solution 
// Multiple solution: Put two pointers, for this example, at the start and the end of the array
// Then the start pointer will add the end pointer, if not = 0 then the end pointer - 1, then add with the start again
// This time the start pointer will + 1 and add with the current end pointer, this continues paradoxically

// Refactor solution

const refactorSolution = (array) => {
    let pointer1 = 0
    let pointer2 = array.length -1
    while(pointer1 < pointer2) {
        let sum = array[pointer1] + array[pointer2]
        if (sum === 0) {
            return [array[pointer1], array[pointer2]]
        } else if (sum > 0) {
            console.log(array[pointer1], array[pointer2], pointer1, pointer2)
            pointer2--
        } else {
            console.log(array[pointer1], array[pointer2], pointer1, pointer2)
            pointer1++
        }
    }
}

console.log(refactorSolution([-7, 6, 4, 2, 1, 0 ,1, 3, 5])) // O(n)


