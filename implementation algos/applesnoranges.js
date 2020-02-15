/* apples and oranges

Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

countApplesAndOranges has the following parameter(s):

s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls from the tree.
oranges: integer array, distances at which each orange falls from the tree.

Input Format

The first line contains two space-separated integers denoting the respective values of s and t.
The second line contains two space-separated integers denoting the respective values of a and b.
The third line contains two space-separated integers denoting the respective values of m and n.
The fourth line contains  space-separated integers denoting the respective distances that each apple falls from point a.
The fifth line contains  space-separated integers denoting the respective distances that each orange falls from point b.

Output Format

Print two integers on two different lines:

The first integer: the number of apples that fall on Sam's house.
The second integer: the number of oranges that fall on Sam's house.
*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  //var arr=[];
  var orangehome=0;
  var applehome=0;
  for(var i=0; i< apples.length;i++){
    
    if(a+ apples[i] >= s && a+ apples[i] <= t ){
      
      applehome++;
  
    }
     
    
  }
  console.log(applehome);
  //arr.push(applehome);
  
  

  for(var j=0; j<oranges.length;j++){
    
    if(b+ oranges[j] >= s && b+ oranges[j] <= t){
      
      orangehome++;
   
    }
  }
  console.log(orangehome);
//arr.push(orangehome);
  //console.log(arr);
//console.log(arr);
//return [...arr];
}
console.log(countApplesAndOranges(2,3,1,5,-2,-1));