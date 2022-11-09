/*
Write a function called searchString which accepts a string s1 and another string s2
The function should return number of times s2 is found in s1
*/

function stringSearch(s1, s2) {
  let count = 0;

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s2[j] !== s1[i + j]) {
        break;
      }

      if (j == s2.length - 1) {
        count++;
      }
    }
  }

  return count;
}

console.log(stringSearch("owomgomg", "omg"));
