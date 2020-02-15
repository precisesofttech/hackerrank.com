/*Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

For example, arr[1,3,5,7,9]. Our minimum sum is 1+3+5+7=16 and our maximum sum is 3+5+7+9=24. We would print

16 24

Sample Input:
1 2 3 4 5

Sample Output:
10 14
*/

function miniMaxSum(arr) {

var arrlength= [...arr].sort();
var sum = 0;

for (var i=0;i<arrlength.length;i++){
  
  sum+= arrlength[i];
  
  
     
}
var minval= sum-arrlength[0];
  var maxval= sum- arrlength[arrlength.length-1];
  
  console.log(maxval,minval); 
  

}