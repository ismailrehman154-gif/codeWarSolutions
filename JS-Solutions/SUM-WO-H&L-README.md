Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.


 Sum Array Without Highest and Lowest

This function takes an array of numbers, adds them together, and removes:

-one lowest number
 one highest number

It then returns the final total.

 Example


sumArray([6, 2, 1, 8, 10]);
// returns 16


because
6 + 2 + 1 + 8 + 10 = 27

27 - 1 - 10 = 16