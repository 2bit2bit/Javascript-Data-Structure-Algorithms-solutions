Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
  
      if (callback(this[i], i ,this))
        newArray.push(this[i])
      }
    // Only change code above this line
    return newArray;
  };
  
//   let arr = new Array
//   arr.push(23)
//   arr.push(18)
  
//   console.log(arr.myFilter(num => num > 20))