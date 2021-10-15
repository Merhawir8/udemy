// Write a program that console logs the numbers from 1 to n.
    // for the multiples of three print 'fizz' instead of the number
    // for the multiples of five print 'buzz'
    // for numbers which are multiples of both three and five print 'fizzbuzz'

function fizzBuzz(n) {
    // for loop 
    for(var i = 0; i <= n; i ++) {
        if (i % 3 === 0) {
            console.log("fizz");
        }
        else if (i % 5 === 0) {
            console.log("buzz");
        }
        if (i % 3 ===0 && i % 5 === 0) {
            console.log("fizzbuzz");
        }
        else {
            console.log(i);
        }
    }
    // if index is not divisible by 3 && equal to 0, print fizz
    // else if index is divisble by 5 && equal to 0 print buzz
    // else if index is divisble 
    // 
};

console.log(fizzBuzz(10));