const selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        var lowest = i
        for (let j = lowest + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j
            }
        }
        if (i !== lowest) {
            console.log(arr)
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
            console.log(arr)
        }
        
    }
    return arr
}

selectionSort([1,2,3,123,1223,31,1]) // O(n^2)