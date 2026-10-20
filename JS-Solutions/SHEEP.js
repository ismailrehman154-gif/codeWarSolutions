function countSheeps(sheep) {
  // TODO
  // we have an array called sheep, we have to filter out the true elements within it
  // then we have to return the total present(true) sheep
  // check for edge cases, possible null or undefined elements within an array
  //maybe if the array has nothing inside, it would return undefined, and if its not a boolean
  // then it also would not count
 let presentSheep = sheep.filter(Boolean).length
 
 return presentSheep
  
}