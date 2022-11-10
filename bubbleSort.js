function bubbleSort(arr) {
  let noSwapas;
  for (let i = arr.length; i > 0; i--) {
    noSwapas = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwapas = false;
      }
    }

    if (noSwapas) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort([2, 5, 3, 6, 3, 2]));
