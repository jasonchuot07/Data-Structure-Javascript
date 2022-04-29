// Collect an array only with odd numbers

// Helper function, only 50% recursive
const collectOddValues = arr => {
    let res = []
    const helper = input => {
        if (input.length === 0) {
            return
        }
        if (input[0] % 2 !== 0) {
            res.push(input[0])
        }
        helper(input.slice(1))
    }
    helper(arr)
    return res
}

collectOddValues([1,1,2,2,3,3,4,4,5,5,6,6,7,7])


// Pure recursion function 
const pureRecursion = arr => {
    let newArray = []
    if (arr.length === 0) {
        return newArray
    }
    if (arr[0] % 2 !== 0) {
        newArray.push(arr[0])
    }
    newArray = newArray.concat(pureRecursion(arr.slice(1)))
    return newArray
}

pureRecursion([1,2,3,4,5,6])

function power(n,n2) {
    if (n2 === 0) {
        return 1
    } return n * power(n, n2-1)
}

(2,4) (2,3) (2,2) (2,1)
power(2,4)