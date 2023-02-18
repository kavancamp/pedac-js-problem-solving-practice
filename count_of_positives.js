/* 
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

Input
array of int

output
array

outliers: empty array or null = return empty array 
1st count of positive numbers
2nd sum of negative.
0 is neither

 */
function countPositivesSumNegatives(input) {
  let result = [0, 0];
  if (input == null || input.length == 0) {
    return [];
  }
  for (let i of input) {
    if (i > 0) {
      result[0]++;
    } else {
      result[1] += i;
    }
  }
  return result;
}
