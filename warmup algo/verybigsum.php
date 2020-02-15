//A Very Big Sum

/*Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

ar: an array of integers .
Input Format

The first line of the input consists of an integer n .
The next line contains n space-separated integers contained in the array.

Output Format

Print the integer sum of the elements in the array.

Sample Input:

1000000001 1000000002 1000000003 1000000004 1000000005

Sample Output:

5000000015


*/


<?php

function aVeryBigSum($ar) {

$sum = 0;
  
  for( $i=0;$i<sizeof($ar);$i++){
    
    $sum+= $ar[$i];
    
  }
  return $sum;
}
?>