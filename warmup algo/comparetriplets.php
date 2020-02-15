/*Compare the Triplets

Complete the function compareTriplets in the editor below. It must return an array of two integers, the first being Alice's score and the second being Bob's.

compareTriplets has the following parameter(s):

a: an array of integers representing Alice's challenge rating
b: an array of integers representing Bob's challenge rating

Input Format:

The first line contains 3 space-separated integers, a[0] ,a[1] , and a[2], describing the respective values in triplet a.
The second line contains 3 space-separated integers,b[0] ,b[1] , and b[2], describing the respective values in triplet b.

Output Format:

Return an array of two integers denoting the respective comparison points earned by Alice and Bob.*/
<?php


function compareTriplets($a, $b) {
   
$i=0;
$j=0;

   if($a[0]>$b[0]  ){
          $i++;
   }
 if($a[1]>$b[1]){
      $i++;
}
if($a[2]>$b[2]){
      $i++;
}
   if($b[0]>$a[0]  ){
          $j++;
   }
 if($b[1]>$a[1]){
      $j++;
}
if($b[2]>$a[2]){
      $j++;
}
return $i." ".$j;
}
?>