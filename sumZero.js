/* 
Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0.
Return an array that includes both value that sums to zero or undefined if a pair does not exist
*/

//// SOLUTION 1
//// TIME: O(N^2)

// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

// console.log("solution 1");
// console.log(sumZero([-2, 0, 1, 2, 3]));
// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 5]));
// console.log(sumZero([-2, 0, 1, 3, 4]));

//// SOLUTION 2
//// TIME: O(N)

function sumZero(arr) {
  let i = 0;
  let j = arr.length - 1;
  let sum;

  while (i < j) {
    sum = arr[i] + arr[j];
    if (sum == 0) {
      return [arr[i], arr[j]];
    } else if (sum > 0) {
      j--
    } else {
      i++
    }
  }
}

console.log('solution 2');
console.log(sumZero([-2, 0, 1, 2, 3]));
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 5]));
console.log(sumZero([-2, 0, 1, 3, 4]));
