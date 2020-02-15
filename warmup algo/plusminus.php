/*Plus Minus

Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

For example, given the array arr=[1,1,0,-1,-1] there are 5 elements, two positive, two negative and one zero. Their ratios would be 2/5 = 0.40000, 2/5 = 0.40000 and 1/5=0.20000. It should be printed as
0.400000
0.400000
0.200000

Output Format

You must print the following  lines:

A decimal representing of the fraction of positive numbers in the array compared to its size.
A decimal representing of the fraction of negative numbers in the array compared to its size.
A decimal representing of the fraction of zeros in the array compared to its size.

*/

<?php

$handle = fopen ("php://stdin","r");
fscanf($handle,"%d",$n);
$arr_temp = fgets($handle);
$arr = explode(" ",$arr_temp);
$arr = array_map('intval', $arr);
 $cp=0;
 $cn=0;
 $cz=0;
 
 
  for($i=0;$i<count($arr);$i++){
      if($arr[$i]>0) $cp=$cp+1;
      elseif ($arr[$i]<0) $cn=$cn+1;
      else $cz=$cz+1;

      
  }
$x=$cp/($cp+$cn+$cz);
$y=$cn/($cp+$cn+$cz);
$z=$cz/($cp+$cn+$cz);
 echo number_format(strval($x), 5 );
echo("\n");
 echo number_format(strval($y), 5 );
echo("\n");
 echo number_format(strval($z), 5 );
echo("\n");
 


?>


