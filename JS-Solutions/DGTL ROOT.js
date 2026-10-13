function digitalRoot(n) {
  while(n > 9){
    n = n.toString().split('').map(Number).reduce((acc,val) => acc + val, 0)
  }
  return n
}