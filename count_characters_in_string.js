/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

 Input - string
 output - object with keys for existing characters and values for occurrences 
*/

function count (string) {  
   let result={};
   string.split('').map(v=>result[v]=result[v]+1||1)
   return result;
}
