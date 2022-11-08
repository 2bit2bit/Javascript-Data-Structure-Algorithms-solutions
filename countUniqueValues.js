/*
Implement a function called countUniqueValues which accepts a sorted array, and counts
unique values in the array.
There can be negative numbers in the array
*/

function countUniqueValues(arr) {

  if (arr.length == 0) {
    return 0
  }

  let i = 0;
  let j = 1;

  while (j <= arr.length - 1) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }

    j++;
  }

  return i + 1;
}

console.log(countUniqueValues([]));
console.log(countUniqueValues([1, 1, 1, 1, 2, 3]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,12,13]));
