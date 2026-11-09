function findUniq(arr) {
  
  // loop through an array with integers, and return the 1 item that is out of place
  // compare two different numbers that are looping
  // give a variable for a and b so that you can compare the two
  
 let common = 0
  if( arr[0] === arr[1]){
   common = arr[0]
 }else{
   common = arr[2]
 }
  for ( let i = 0; i < arr.length; i++){
    if( arr[i] !== common){
      return arr[i]
    }
  }
}
