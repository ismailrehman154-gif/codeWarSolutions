function minMax(arr){
  //i need to loop this array and return the highest and lowest numbers
  //creat variable for min & max 
  //return [min,max] an array
  let min = arr[0]
  let max = arr[0]
  for(let i = 1; i < arr.length; i++){
    let currentNum = arr[i]
    // if the currentNUm is greater than max then update max to currentNum
    //if the currentNum is less than min, update min to currentNum
    if(currentNum > max ){
      max = currentNum
    }else if ( currentNum < min){
      min = currentNum
    }
  }
    
  
  
  
  
  return [min,max]; // fix me!
}