function swap(arr, i, j) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;

  return arr;
}

// console.log(swap([0,1,2,3], 0, 3))

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = start;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[start]) {
      //swap arr[i] with arr[pivot + 1]
      swap(arr, i, pivot + 1);
      pivot++;
    }
  }

  //swap arr[0] and arr[pivot]
  swap(arr, start, pivot);

  return pivot;
}

// console.log(pivot([99,3,57,2,23,12,4,98,100]))

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([4, 1, 3, 2, 5]));
