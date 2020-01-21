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