// Given an integer, retrun an integer that is the reverse ordering of numbers.


function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');

    if (n < 0) {
        return parseInt(reversed)* - 1;
    }
    return parseInt(reversed);
}


console.log(reverseInt(15));
console.log(reverseInt(189));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-90));

