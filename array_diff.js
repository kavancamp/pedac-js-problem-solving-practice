/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:


Inputs: 
arrayDiff([1, 2], [1]) == [2]
arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3]
Edge:
arrayDiff([], [1, 2]) == []
arrayDiff([1, 2], []) == [1, 2]
arrayDiff([], []) == []



*/
// Create function called “arrayDiff” that takes two arrays as arguments, “array1” and “array2.”
function arrayDiff(array1, array2) {
  // Handle edge cases: (a) If the length of “array1” is 0, return an empty array
  if (array1.length === 0) {
    return [];
  }
  // Handle edge cases: (b) If the length of “array2” is 0, return “array1”
  if (array2.length === 0) {
    return array1;
  }

  // Create the array to return called “returnArray”
  let returnArray = [];
  // Loop through “array1”
  array1.forEach(function included(element) {
    // If the element is not included in “array2”, push it to “returnArray”
    if (!array2.includes(element)) {
      returnArray.push(element);
    }
  });

  // Return “returnArray”
  return returnArray;
}
//OR
function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}
