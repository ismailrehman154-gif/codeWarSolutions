function wordValue(words) {
   //we have an array of strings, 
  //we need to separate each string,
  //split each value into individual letters, 
  // find its number placement in the alphabet,
  // add the numbers, & return a new array
  //INPUT: ['abcd'] = [10], ['def'] = [15], ['abc', 'def'] = [6, 30]
  //PREP paramters = words array
  // return, Number array
  // examples is the input spot
  //pseudocode!
  
   let numconvert = [];
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  for (let i = 0; i < words.length; i++) { // loop through the array given check the length
    let sum = 0;

    for (let j = 0; j < words[i].length; j++) {
      let letter = words[i][j];

      if (letter !== " ") {
        sum += alphabet.indexOf(letter) + 1
      }
    }

    numconvert.push(sum * (i + 1))
  }

  return numconvert
}
