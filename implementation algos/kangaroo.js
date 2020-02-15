/*Kangaroo

Complete the function kangaroo in the editor below. It should return YES if they reach the same position at the same time, or NO if they don't.

kangaroo has the following parameter(s):

x1, v1: integers, starting position and jump distance for kangaroo 1
x2, v2: integers, starting position and jump distance for kangaroo 2

Input Format

A single line of four space-separated integers denoting the respective values of x1,v1 ,x2 and v2.
*/

function kangaroo(x1, v1, x2, v2) {
var x = x2 - x1;
var y = v1 - v2;
//console.log(x);
//console.log(y);
   if (v1>v2 && x%y===0) {

     return "YES";
   }
   else {
    return "NO";
   }
}
console.log(kangaroo(0, 3, 4, 2));

