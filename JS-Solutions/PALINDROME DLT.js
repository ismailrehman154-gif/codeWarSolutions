function solve(str) {
  let reversed = str.split('').reverse().join('');

  let count = [...str].filter((current, i) => current !== reversed[i]).length;

  return count === 2 || (count === 0 && str.length % 2 === 1);
}