function paperwork(n, p) {
  //most likely using a conditional 
  // if either is zero return zero
  //the paramters are two, one for the number of students and another for the number of pages
  // check if either is zero, if so return zero
  // for example,  n = 0, m = 10 === 0///  n = 4  m= 4 ===16
  if(n < 0 || p < 0){
    return 0
  }else{
    return n * p
  }
}
