function persistence(num) {
   //code me
  let count = 0;
  while(num >= 10){
    const split = String(num).split('')
  const numNum = split.reduce((num1, currentnum) => {
    return num1 * Number(currentnum);
  }, 1);
    num = numNum // forgot to assign the new variable to the parameter
  count++;
  }
  return count;
  }
//PREP
//parameter is any num however big it may be
//Return is that number, multiplied by each number individually( 56 = 5*6) and returned until the return is a single digit number
//examples: 22= 2*2 = 4, or 56= 5*6 = 30 = 3*0 = 0
//pseudo code, i need a method that splits numbers into an array,
//probably .split()
//and then one that multiplies it by the next element in the array, maybe forEach()
