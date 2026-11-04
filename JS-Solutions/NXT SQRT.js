function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
// return the next perfect square
  let root = Math.sqrt(sq)
  
  if( root % 1 !== 0){
    return -1
  }else if( root * root === sq){
    root += 1
    return root * root
  }
  
  
}