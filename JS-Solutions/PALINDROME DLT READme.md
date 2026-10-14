In this Kata, you will check if it is possible to convert a string to a palindrome by changing one character.

For instance:

"abbx" ==> true
// because we can convert 'x' to 'a' and get a palindrome.

"abba" ==> false
// because we cannot get a palindrome by changing any character.

"abcba" ==> true
// We can change the middle character.

"aa" ==> false

"ab" ==> true
Good luck!

current is the variable. It represents each letter in a string as JavaScript loops through it. For example, if the string is abc, current will first be a, then b, then c. In the code, i use current to compare each letter with the letter at the same position in the reversed string.