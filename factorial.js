/* 
Write a function called factorial which accepts an integer n.
And returns n!
*/

////SOLUTION 1

// function factorial(n){
//     let total = 1;
//     for(let i = n; i > 1; i--){
//         total *= i
//     }
//     return total;
// }

////SOLUTION 2

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(10));
