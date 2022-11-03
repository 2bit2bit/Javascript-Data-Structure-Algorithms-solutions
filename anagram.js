/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different 
word or phrase, typically using all the original letters exactly once. 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

//SOLUTION 1 => O(n)

let isAnagram1 = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let letter of s) {
    frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
  }

  for (let letter of t) {
    frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
  }
  for (let letter in frequencyCounter1) {
    if (!(letter in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter1[letter] !== frequencyCounter2[letter]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram1("anagram", "nagaram"));
console.log(isAnagram1("anagram", "bagaram"));
console.log(isAnagram1("anagram", "baaram"));
