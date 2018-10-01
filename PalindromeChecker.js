/*
a solution to the following exercise from freeCodeCamp JavaScript Algorithms and Data Structures Projects: Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".


*/

//a convoluted working solution I came up with, following the wrong assumption that 
//the first and second half of the string needed to be compared

function palindrome(str) {

 
  let cleanstr = str.replace(/[^A-Za-z0-9]+/g, '').toLowerCase();
  let fullarray = cleanstr.split("");


  if (fullarray.length %2==0){

    let firsthalf = cleanstr.slice(0,cleanstr.length/2);
    let secondhalf =cleanstr.slice((cleanstr.length/2), cleanstr.length+1).split("").reverse().join("");


    if(firsthalf==secondhalf){return true}
    else{return false}


  }
  else{
  
    let firsthalf = cleanstr.slice(0,((cleanstr.length-1)/2));
    let secondhalf = cleanstr.slice(((cleanstr.length-1)/2)+1, cleanstr.length+1).split("").reverse().join("");

   
    if(firsthalf==secondhalf){return true}
    else{return false}

}}




console.log(palindrome("Eye"));
console.log(palindrome("Eyeggeye"));
console.log(palindrome("dogs"));
console.log(palindrome("2A3*3a2"));






//the basic, compact and simple solution

function palindrome1(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

console.log(palindrome1("Eye"));
console.log(palindrome1("Eyeggeye"));
console.log(palindrome1("dogs"));
console.log(palindrome1("2A3*3a2"));

