function twoSum(numbers, target) {
  // array of numbers, and a single integer
  // find two numbers that equate to that single integer
  // compare the sum of two numbers to the integer, if it equates to it return the two numbers
  // examples are given
  //assign variables to two different items in array
  //those have to loop to check if they equal the target
  // maybe use a nested forloop, wack for the time complexity, but will get the job done
  
  for(let i = 0; i < numbers.length; i++){
    let a = numbers[i]
    
    for(let j = i + 1; j < numbers.length; j++){
      
      let b = numbers[j]
      
      if(a + b === target){
        return [i, j]
      }
    }
  }

  }
 
  
  
  
  
