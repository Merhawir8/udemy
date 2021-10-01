// Given a string, return true if the string is a palindrome or false if it is not. 
// Palindromes are strings that form the same word if it is reversed.


function palindrome(str) {
    // first, change the string into arrary
    // then, give access to the character in the array
    return str.split('').every((char,i)=> {
        return char === str[str.length - i - 1];
    });
    
}
console.log(palindrome("abcdba"));