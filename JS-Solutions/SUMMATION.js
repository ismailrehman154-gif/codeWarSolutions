var summation = function (num) {
  // Code here
 // input is a number, we have to return the summation( increment addition that gives us that number)
  //return is the number given if you add by 1 until the summation
  //adding by 1 until we reach the number in num
  //return the added outcome
  //have to have the sum outcome as well as the current number
  //use a while loop
  let total = 0
  let curr = 1
  while ( curr <= num){
    total = total + curr
    curr++
  }
  return total
}