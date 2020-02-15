/*Diagonal Difference



Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr is shown below:
1 2 3
4 5 6
9 8 9 

The left-to-right diagonal = 1+5+9=15 . The right to left diagonal = 3+5+9=17. Their absolute difference is .

Sample Input:
11 2 4
4 5 6
10 8 -12

Sample Output:
15
*/
<?php
function diagonalDifference($arr) {
    // Write your code here
    
  $arrDiag = count($arr);

$firstD = 0;
$secondD = 0;

$i = 0;
for($j = 0; $j < $arrDiag; $j++){
    $firstD =$firstD + $arr[$i++][$j];
    $secondD = $secondD + $arr[$arrDiag - $i][$j];
}

return abs($firstD - $secondD);


}
?>
