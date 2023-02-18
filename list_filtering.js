/* In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

filter out strings
return a new array with integers only

*/

function filter_list(l) {
  let filtered = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] !== "string") {
      filtered.push(l[i]);
    }
  }
  return filtered;
}
