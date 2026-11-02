function distinct(a) {
 //you have an array, and you have to return a new array (maybe map filter or reduce) 
  //the new array should contain only 1 of each element
  
 const arr = a.filter((item, b) => {
   return a.indexOf(item) === b
 })
  return arr
}