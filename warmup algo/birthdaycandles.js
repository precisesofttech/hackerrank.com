/*Birthday Cake Candles

Complete the function birthdayCakeCandles in the editor below. It must return an integer representing the number of candles she can blow out.

For example, if your niece is turning 4 years old, and the cake will have 4 candles of height 4,4,1,3, she will be able to blow out  2 candles successfully, since the tallest candles are of height 4 and there are 2 such candles.

input Format

The first line contains a single integer, n , denoting the number of candles on the cake.
The second line contains n space-separated integers, where each integer i describes the height of candle.

Output Format

Return the number of candles that can be blown out on a new line.

*/

function birthdayCakeCandles(ar) {

var count = 0;

 var max=Math.max(...ar);


for(var i=0; i<ar.length; i++){
  
   
  if (ar[i]==max){
    
    count++;
  }
  
  
}
return count;

}

