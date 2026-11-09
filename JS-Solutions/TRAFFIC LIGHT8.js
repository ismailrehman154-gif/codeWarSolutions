function updateLight(current) {
  
  //your code here!
  let output = ""
  if(current === "green"){
    output = 'yellow'
  }else if( current === 'yellow'){
    output = 'red'
  }else if( current === "red"){
    output = "green"
  }
  return output
}