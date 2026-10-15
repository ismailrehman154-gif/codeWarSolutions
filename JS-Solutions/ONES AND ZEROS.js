function replaceZero(arr) {
  let best = -1, max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      let count = 0;
      arr[i] = 1;

      for (let n of arr) {
        count = n === 1 ? count + 1 : 0;
        if (count >= max) {
          max = count;
          best = i;
        }
      }

      arr[i] = 0;
    }
  }

  return best;
}