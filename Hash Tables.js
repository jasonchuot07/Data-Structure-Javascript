class HashTable {
    constructor(size=50) {
        this.keyMap = new Array(size)
    }
    hash(key){
        let total = 0
        let prime = 13
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * prime + value) % this.keyMap.length
        }
        return total
    }
    set(key, value) {
        let index = this.hash(key)
        return index
    }
    get(key) {
        let index = this.hash(key)
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
    }
    values() {
        let valuesArray = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArray.includes(this.keyMap[i][j][1])) {
                       valuesArray.push(this.keyMap[i][j][1]) 
                    }
                }
            }
        }
        return valuesArray
    }
    keys() {
        let keysArray = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArray.includes(this.keyMap[i][j][0])) {
                       keysArray.push(this.keyMap[i][j][0]) 
                    }
                }
            }
        }
        return keysArray
    }
}

let hashtable = new HashTable()
hashtable.set('hello', 'goodbye')


// Big O of HashTable Insert & Deletion & Access = O(1)
// Definition: HashTables are collection of key value pairs
// Can find & add values quickly
// Store data in a large array, and work by hashing the keys
// A good hash should be fast, distribute keys uniformly, and be deterministic
// separate chaining and linear probing are  two strategies used to deal with two keys that hash to the same index