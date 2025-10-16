/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  strlow = str.toLowerCase();
  strnew = strlow.replace(/[^a-z]/g,"")
  len = strnew.length;
  for(let i = 0 ; i<=len/2; i++)
  {
    if(strnew[i] != strnew[len-1-i])
      return false;
  }
  return true;
}

module.exports = isPalindrome;
