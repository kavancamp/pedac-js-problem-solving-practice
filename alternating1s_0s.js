/* Write a function that takes one argument, a positive integer, and retruns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer */

/* 
INPUT:
  - one positive integer 
OUTPUT:
 - string of alternating 1s and 0s
RULES:
 - string starts with a '1'
 - length should match input amount
 - return empty string if unput is - or less than 0
DATA STRUCTURES:
- string 1 & 0
Algorithm:
- create empty string 'result'
- If input is 0 or less than 0, return empty string
*/

function stringy(size) {
  return "".padStart(size, "10");
}

//Edge cases
console.log(stringy(0));
console.log(stringy(-4));
//Valid
console.log(stringy(6));
