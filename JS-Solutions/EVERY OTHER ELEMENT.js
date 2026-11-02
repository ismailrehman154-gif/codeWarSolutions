function removeEveryOther(arr){
  //your code here
  //input is an array with items within it
  // we have to return an array that removes every other item (maybe map,filter,replace)
  return arr.filter((_,index) => index % 2 === 0)
}