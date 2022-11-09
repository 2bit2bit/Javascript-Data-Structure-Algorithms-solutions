/*
Write a function called linearSearch which accepts an array arr and a value
The function should return the index of value in the array if it exist an -1 if it dosen't
*/

function linearSearch(arr, value) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === value) return index
    }

    return -1
}

console.log(linearSearch([1,2,3,1],1))
console.log(linearSearch([2,3,5,7,8],1))
console.log(linearSearch(['yea', 'yes', 'yep'],'yes'))

