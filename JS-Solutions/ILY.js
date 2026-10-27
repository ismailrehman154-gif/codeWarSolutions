function howMuchILoveYou(nbPetals) {
// i know i can use an if else statement, but how do i keep it going past that number
  // input is a number, output is 1 of 6 phrases
  //loops every 6 numbers, restarts from the first phrase onward
   //return a string for every number, loop through the same 6 phrases for every six numbers passed
 const phrases = [
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly",
  "not at all"
];
    // Map the current iteration number to a 1-6 range
    let index = ((nbPetals - 1) % 6) 
   
    return phrases[index]
}
