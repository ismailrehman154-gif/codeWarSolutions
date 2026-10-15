Given an array containing only zeros and ones, find the index of the zero that, if converted to one, will make the longest sequence of ones.

For instance, given the array:

[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]
replacing the zero at index 10 (counting from 0) forms a sequence of 9 ones:

[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1]
                  '------------^------------'
Your task is to complete the function that determines where to replace a zero with a one to make the maximum length subsequence.

Notes:

If there are multiple results, return the last one:
[1, 1, 0, 1, 1, 0, 1, 1] ==> 5

The array will always contain only zeros and ones.





 This function goes through an array and finds each zero. It temporarily changes the zero to a one and counts how many ones are
 in a row. It keeps track of the longest chain and the index that created it. After checking all the zeros, it returns the
 index that makes the longest chain. If there is a tie, it returns the last index. (used good ol AL's help on this one)