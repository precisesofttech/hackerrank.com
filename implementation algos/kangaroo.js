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