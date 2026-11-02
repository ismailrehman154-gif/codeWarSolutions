//return the total number of smiling faces in the array
function countSmileys(arr) {
  // gotta make an array of acceptable smiley faces
  // count the acceptable smiley faces
  //return the count of smiley faces if they are in the array that is looped
  //looping through two different arrays to match smiley faces and count goes up if a match is found
  let count = 0
  const smiley = [':)', ';)', ':-)',':~)',';-)', ';~)',':D', ';D', ':-D',':~D',';-D', ';~D' ]
  for(let i = 0; i < smiley.length; i++){
    
    
    //now we loop through the original array and see if those items match the smiley faces
    for(let j = 0; j < arr.length; j++){
      
      if(arr[j] === smiley[i]){
        count++
      }
    }
  }
  return count;
}