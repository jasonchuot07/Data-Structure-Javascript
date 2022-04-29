// Compare two strings to see if every character in string1 is = string2 & the frequency must be equal
// Ex: compare('hello', 'ohell') = true ; compare('hello', 'helo') = false

// My solution using Frequency Counter
const compare2Strings = (string1, string2) => {
    const frequency1 = {}
    const frequency2 = {}
    for (let char in string1) {
       frequency1[string1[char]] = (frequency1[string1[char]] || 0) + 1
    }
    for (let char in string2) {
        frequency2[string2[char]] = (frequency2[string2[char]] || 0) + 1
    }
    for (let key in frequency1) {
        if (!(key in frequency2)) {
            return false
        }
        if (frequency1[key] !== frequency2[key]) {
            return false
        }
    }
    return true    
}

// Better solution

const anagram = (string1, string2) => {
    if (string1.length !== string2.length) {
        return false
    }
    const lookup = {}
    for (let char in string1) {
        const letter = string1[char]
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }
    for (let char in string2) {
        const letter = string2[char]
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1
        }
    }
    return true

}

anagram('heelo', 'halw')