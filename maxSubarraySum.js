/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array.
*/

//// SOLUTION 1
//// O(n^2)
// function maxSubarraySum(arr, n) {
//     if ( n > arr.length){
//         return null;
//       }
//       var max = -Infinity;
//       for (let i = 0; i < arr.length - n + 1; i ++){
//         temp = 0;
//         for (let j = 0; j < n; j++){
//           temp += arr[i + j];
//         }
//         if (temp > max) {
//           max = temp;
//         }
//       }
//       return max;
// }


//// SOLUTION 2
//// O(n)

function maxSubarraySum(arr, n){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < n) return null;
    for (let i = 0; i < n; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = n; i < arr.length; i++) {
      tempSum = tempSum - arr[i - n] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }

  
console.log(maxSubarraySum([1,2,5,2,8,5],2))
console.log(maxSubarraySum([1,2,5,2,8,5],4))
console.log(maxSubarraySum([4,2,1,6],4))
console.log(maxSubarraySum([4,2,1,6,2],4))
console.log(maxSubarraySum([ ],4))
