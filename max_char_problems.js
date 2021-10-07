
// Write a function to find the total number of each characters in a given string

const string = "Hello"
// hash map/ dictionary/ key-value
const dict = {};

// we want to loop over each character of the string
for (let char of string) {
    // if char is in the dict, then get the value of the character and add incremented it by one
    if (!dict[char]) {
        dict[char] = 1;
    }
    else {
        dict[char] = dict[char] + 1;
    }
}

console.log(dict);