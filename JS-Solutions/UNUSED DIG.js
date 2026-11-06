function unusedDigits() {
 // we have an input of an array with varying numbers of different values,
  //we will return only the integers that are not in use
  // create a variable of all the different integers in an array
  //check for similar numbers and cut them from the variable array
  //return the array after it gets cut
  const input = Array.from(arguments).join('')
  let unused = ''
  for(let i = 0; i <= 9; i++){
    if(!input.includes(String(i))){
      unused += i
    }
  }
  return unused

}