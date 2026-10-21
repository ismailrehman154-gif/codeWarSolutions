function isVow(a) {
  //we have an array of numbers
  //need to return a lowercase vowel for the character code for lowercase vowels
  // 97 (a), 101 (e), 105 (i), 111 (o), and 117 (u)
  // change the array index of that number to its vowel equivalent
  //use String.fromCharCode()
 
  return a.map(num => {
    let char = String.fromCharCode(num);

    if ("aeiou".includes(char)) {
      return char;
    }

    return num;
  });
}
    
  
  
