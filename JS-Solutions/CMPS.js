function cockroachSpeed(s) {
  //Good Luck!
  // check how much km per hour the speed is going, so s is the km per hour
  //return the cm per second, so divide by the minutes than the seconds, and do the same for the speed
  //divide the speed by meters then keep going down to cm
  //return the speed per second
  //return the cm traveled for that speed
  let cmps = 100000 / 3600
  return Math.floor(s * cmps)
}