// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don’t forget the space after the closing parentheses!

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function createPhoneNumber(array) {
    return `(${array.splice(0, 3).join('')}) ${array.splice(0, 3).join('')}-${array.splice(0, 4).join('')}`
}

// return `(${array.splice(0, 3)}) ${array.splice(0, 3)}-${array.splice(0, 4)}`
// }
console.log(createPhoneNumber(array))