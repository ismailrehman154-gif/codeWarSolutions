function per(n) {
  let results = []
  
  while( n > 9){
   n = String(n).split('').reduce((firstNum, currNum) => {return firstNum * Number(currNum)}, 1)
  results.push(n)
  }
  return results
}