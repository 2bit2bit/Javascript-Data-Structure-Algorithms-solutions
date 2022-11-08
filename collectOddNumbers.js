/* 
Write a function called collectOddNumbers which accepts an array arr.
and returns a newArr conatining all the odd numbers in the array arr
*/

function collectOddNumbers(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddNumbers(arr.slice(1)));
    return newArr;
}

console.log(collectOddNumbers([1,2,3,4,5]))
                                        
                                                                
                                                                             
                            
            