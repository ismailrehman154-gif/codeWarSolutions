Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


i first affirmed i need a while loop for this problem, then within it i assigned to the paramater what needed to occur to fulfill the required instructions.
i used .toString() method to make it into a string which i could then use .split('') to seperate it at each value and create an array with it, then i used .map(Number) to only return the numbers found within that array and i used the reduce method to boil it down and gave it the addition logic, since its addition u begin at 0 and not 1 (thats for multiplication)

then i returned n