function sumArray(numbers) {
  if (numbers === null || numbers.length <= 1) {
    return 0;
  }

  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }

  let lowest = Math.min(...numbers);
  let highest = Math.max(...numbers);

  return total - lowest - highest;
}