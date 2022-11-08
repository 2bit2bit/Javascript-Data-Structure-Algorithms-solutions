/* 
Write a function called sumRange which accepts an integer n.
And returns the sum of integers from 1 to n
*/

function sumRange(n){
    if(n === 1) return 1; 
    return n + sumRange(n-1);
 }
 
 console.log(sumRange(4))
 console.log(sumRange(10))
 console.log(sumRange(100))
 
                   
                                    
                                 