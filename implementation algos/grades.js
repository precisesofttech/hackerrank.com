/* Complete the function gradingStudents in the editor below. It should return an integer array consisting of rounded grades.

gradingStudents has the following parameter(s):

Student 1 received a 73, and the next multiple of 5 from 73 is 75. Since 75-73<3 , the student's grade is rounded to 75.
Student 2 received a 67, and the next multiple of 5 from 67 is 70. Since 70-67=3, the grade will not be modified and the student's final grade is 67.
Student 3 received a 38, and the next multiple of 5 from 38 is 40. Since 40-38<3, the student's grade will be rounded to 40.
Student 4 received a grade below 38, so the grade will not be modified and the student's final grade is 33.

*/




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
