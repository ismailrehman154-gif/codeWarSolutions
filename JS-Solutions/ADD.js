function positiveSum(arr) {
  
      let pure = arr.filter((plus) => plus > 0)
    return  pure.reduce((a,b) => a+b,0)
    
  
}