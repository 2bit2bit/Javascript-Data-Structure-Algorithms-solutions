/*
Write a function called binarySearch which accepts an array arr and a value
The function should return the index of value in the array if it exist an -1 if it dosen't
*/

function binarySearch(arr, value) {
  let i = 0;
  let j = arr.length - 1;
  let m;

  while (i <= j) {
    m = Math.floor((j - i) / 2) + i;
    if (arr[m] === value) {
      return m;
    } else if(value > m) {
        i = m + 1
    } else {
        j = m -1
    }
  }

  return -1
}

console.log(binarySearch([0,1,2,3,4], 3))
console.log(binarySearch([0,1,2,3,4], 4))
console.log(binarySearch([0,1,2,3,4], 40))