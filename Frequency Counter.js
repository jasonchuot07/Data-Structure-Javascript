// Frequency Counter

const compareArray = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }
    let frequency1 = {}
    let frequency2 = {}
    for (let value of arr1) {
        frequency1[value] = (frequency1[value] || 0) + 1
    }
    for (let value of arr2) {
        frequency2[value] = (frequency2[value] || 0) + 1
    }
    console.log(frequency1)
    console.log(frequency2)
    for (let key in frequency1) {
        if (!(key ** 2 in frequency2)) {
            return false
        }
        if (frequency2[key ** 2] !== frequency1[key]) {
            return false
        }
    }
    
    return true
}

compareArray([2,4,2], [1,16,4])