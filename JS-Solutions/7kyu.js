var number=function(array){
  //your awesome code here
  //array of strings
  //concat the number : to each item, starting at 0 (unlike index starting at 0)
  //most likely return new array, map,filter, anything else etc
//Examples: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
  
  return array.map((chicken, index) => `${index + 1}: ${chicken}`)
}