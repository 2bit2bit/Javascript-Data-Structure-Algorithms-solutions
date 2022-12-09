function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {

       for (let j = i - 1; j > 0; j--) {

            if (arr[j] > arr[i]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }

       }

    }

    return arr
}

/**
 * pick 5, i = 0
 *    j = 1
 *      3 < 5
 *      swap 3 and 5
 *    j = 0
 *    [3,5,2,45,6,7]
 * pick 5, i = 1
 *    j = 2
 *      2 < 5
 *      swap 2 and 5
 *    [3,2,5,45,6,7]
 *    j = 1
 *       j == i
 *    j = 0
 *       3 !< 2
 *  
 *        
 */


console.log(insertionSort([5, 3, 2 ,45,8,7]));