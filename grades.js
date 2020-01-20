function gradingStudents(grades) {
  
  var result=[];
  
   for(var i=0; i< grades.length; i++){
     var current=grades[i];
  //var result=[];
  var multi=Math.ceil(current/5)*5;
      
     var diff= multi- current  ;
     //console.log(diff);
     
     if(current < 38 ){
       
       result.push(current);
       
     }
     else if (diff < 3  ){
       
       result.push(multi);
     }
   else {
     
            result.push(current);

   }
}   
 return result;
}
console.log(gradingStudents([73,67,38,33]));