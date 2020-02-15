/*  Staircase

Consider a staircase of size n=4 :
   #
  ##
 ###
####

Sample Input: 6
Sample Output:

     #
    ##
   ###
  ####
 #####
######
*/

function staircase(n) {

let str = "";

            for(let i = 1; i <= n; i++ ){
                for(let j = 1; j <= n; j++){
                    if(i + j > n){
                        str = str.concat("#");
                    }else{
                        str = str.concat(" ")
                    }
                }
                str = str.concat("\n")
            }

            console.log(str)
}

