function points(games) {
  
  //input is a key value pair
  // return either win loss or tie
  //output is a string
  // claculate the points and return a winner
  // if games is empty return zero
  //if points is tied return tie
  let points = 0
  let currentGame = games[0]
  for(let i = 0; i < games.length; i++){
    currentGame = games[i]
   let score = currentGame.split(':')
   console.log(score)
   let x = score[0]
   let y = score[1]
   if (x > y){
    points = points + 3     
   }else if (x === y){
     points = points + 1
   }else if (x < y){
     points = points + 0
   }
    
  }
  return points
}