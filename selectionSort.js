function selectionSort(arr) {
  let minValIndex
  for (let i = 0; i < arr.length; i++) {
    minValIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minValIndex] > arr[j]) {
        minValIndex = j
      }   
    }

    let temp = arr[i]
    arr[i] = arr[minValIndex]
    arr[minValIndex] = temp
    
  }
  return arr
}

console.log(selectionSort([5, 3, 4, 43,1, 2,0]));
